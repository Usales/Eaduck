import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/user.service';
import { interval, Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NgApexchartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  totalUsers = 0;
  totalClassrooms = 0;
  totalNotifications = 0;
  totalTasks = 0;
  usersByRole: { [role: string]: number } = {};

  chartOptions: any = {};

  currentUser: User | null = null;

  tasksChart = {
    chart: { type: 'donut' as const, background: 'transparent' },
    labels: ['Feitas', 'Para Fazer'],
    series: [0, 0],
    colors: ['#22d3ee', '#6366f1'],
    legend: { labels: { colors: '#fff' } },
    dataLabels: { style: { colors: ['#fff'] } }
  };
  notificationsChart = {
    chart: { type: 'pie' as const, background: 'transparent' },
    labels: ['Aviso', 'Tarefa', 'Sistema', 'Fórum'],
    series: [0, 0, 0, 0],
    colors: ['#f59e42', '#6366f1', '#22d3ee', '#f43f5e'],
    legend: { labels: { colors: '#fff' } },
    dataLabels: { style: { colors: ['#fff'] } }
  };
  classroomsChart = {
    chart: { type: 'bar' as const, background: 'transparent' },
    labels: [] as string[],
    series: [
      { name: 'Concluídas', data: [] as number[] },
      { name: 'Pendentes', data: [] as number[] },
      { name: 'Atrasadas', data: [] as number[] }
    ],
    colors: ['#22d3ee', '#6366f1', '#f43f5e'],
    legend: { labels: { colors: '#fff' } },
    dataLabels: { style: { colors: ['#fff'] } }
  };
  private refreshSub: Subscription | null = null;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadDashboardData();
    this.refreshSub = interval(30000).subscribe(() => this.loadDashboardData());
  }

  loadDashboardData() {
    this.userService.getAllUsers().subscribe((users: any[]) => {
      this.totalUsers = users.length;
      this.usersByRole = users.reduce((acc, u) => {
        acc[u.role] = (acc[u.role] || 0) + 1;
        return acc;
      }, {} as { [role: string]: number });
    });
    this.http.get<any>('http://localhost:8080/api/dashboard/tasks-by-classroom', {
      headers: this.authService.getAuthHeaders()
    }).subscribe((data) => {
      const arr = Array.isArray(data) ? data : Object.values(data);
      const labels = arr.map((d: any) => d.classroom);
      const concluidas = arr.map((d: any) => d.concluidas ?? 0);
      const pendentes = arr.map((d: any) => d.pendentes ?? 0);
      const atrasadas = arr.map((d: any) => d.atrasadas ?? 0);
      this.classroomsChart = {
        ...this.classroomsChart,
        labels: labels,
        series: [
          { name: 'Concluídas', data: concluidas },
          { name: 'Pendentes', data: pendentes },
          { name: 'Atrasadas', data: atrasadas }
        ]
      };
      this.totalClassrooms = labels.length;
    });
    this.notificationService.getNotifications().subscribe((notifications: any[]) => {
      this.totalNotifications = notifications.length;
      // Tipos de notificações
      const types = ['AVISO', 'TAREFA', 'SISTEMA', 'FÓRUM'];
      const counts = types.map(type => notifications.filter((n: any) => (n.notificationType || '').toUpperCase() === type).length);
      this.notificationsChart.series = counts;
    });
    this.http.get<any[]>('http://localhost:8080/api/tasks').subscribe((tasks: any[]) => {
      this.totalTasks = tasks.length;
      // Tarefas feitas x para fazer
      const feitas = tasks.filter((t: any) => t.status === 'CONCLUIDA' || t.status === 'CONCLUIDO').length;
      const paraFazer = tasks.length - feitas;
      this.tasksChart.series = [feitas, paraFazer];
    });
  }

  ngOnDestroy() {
    if (this.refreshSub) this.refreshSub.unsubscribe();
  }
}
