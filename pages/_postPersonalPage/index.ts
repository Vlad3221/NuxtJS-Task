import {Component, Vue} from "nuxt-property-decorator";
import ArticlePopup from "~/components/ArticlePopup/index";
import configTable from "~/static/config.json";

@Component({
  name: "postPersonalPage",
  components: {ArticlePopup}
})

export default class extends Vue {
  public configTable = configTable;
}
