import {Component, Vue} from "nuxt-property-decorator";
import configTable from "@/static/config.json";
import ArticleTable from "~/components/ArticleTable/index";
import ArticlePopup from "~/components/ArticlePopup/index";

@Component({
  name: 'IndexPage',
  components: {
    ArticlePopup,
    ArticleTable
  }
})

export default class extends Vue {
  public configTable = configTable;
  public disablePrev = false;
  public disableNext = false;
  public posts: any[] = [];
  public limitPost = 5;
  public get page() {
   return Number(this.$route.params.index) || 1;
  }

  public get pages() {
    return Math.floor(this.configTable.length / this.limitPost);
  };

  splicePost() {
    this.configTable = configTable;
    this.posts = this.configTable.slice((+this.page - 1) * this.limitPost, this.limitPost * +this.page)
  }

  mounted() {
    this.splicePost()
  }
}
