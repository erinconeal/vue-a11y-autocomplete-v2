declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
