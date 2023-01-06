import { windowStateStore } from "./modules/windowState";

// 统一导出useStore方法
export default function useStore() {
  return {
    windowState: windowStateStore(),
  };
}
