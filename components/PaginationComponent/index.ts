import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component({
  name: 'PaginationComponent',
})

export default class PaginationComponent extends Vue {
  @Prop()
  currentPage!: number;

  @Prop()
  lastPage!: number;

  @Prop()
  maxLength!: number;

  @Prop()
  setCurrentPage: (page: number) => void;
}
