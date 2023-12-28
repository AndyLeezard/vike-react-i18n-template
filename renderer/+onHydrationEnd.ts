import type { OnHydrationEndAsync } from "vike/types"

// https://vike.dev/onHydrationEnd
export const onHydrationEnd: OnHydrationEndAsync =
  async (): ReturnType<OnHydrationEndAsync> => {
    console.log("Hydration finished; page is now interactive.")
  }
