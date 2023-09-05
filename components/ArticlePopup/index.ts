import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component({
  name: 'ArticlePopup'
})

export default class ArticlePopup extends Vue {
  public openPopup: boolean = false;
  public underСonsideration: any[] = [];

  public nextTodoId: number = 16;
  public userName: string = '';
  public mail: string = '';
  public theme: string = '';
  public details: string = '';

  public addNewTodo(){
    if (this.userName === '', this.mail === '', this.theme === '', this.details === '') return;
    this.underСonsideration.push({
                    id: this.nextTodoId++,
                    name: this.userName,
                    mail: this.mail,
                    themesTitle: this.theme,
                    themesText: this.details
    })
    this.userName = '';
    this.mail = '';
    this.theme = '';
    this.details = '';
    this.openPopup = false;
    this.nextTodoId = this.nextTodoId++;
    this.$emit('updateData')
  }
}
