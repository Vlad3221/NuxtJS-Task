import {Component, Prop, Vue} from "nuxt-property-decorator";
@Component({
  name: 'ArticleTable'
})
export default class ArticleTable extends Vue {

  @Prop({default: 0})
  pages: number;

  @Prop({default: () => []})
  posts: any[];

  @Prop({default: 1})
  page: number;

  public get disablePrev() {
    return this.page === 1
  };

  public get disableNext() {
    return this.page === this.pages
  };

  goNext() {
    if (this.page >= 1) {
      this.$router.push("/" + (this.page + 1));
    }
    this.$emit('updateData')
  };

  goPrev() {
    if (this.page > 1) {
      this.$router.push("/" + (this.page - 1));
    }
    this.$emit('updateData')
  };
}
