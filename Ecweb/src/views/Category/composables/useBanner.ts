import { getBannerAPI } from "@/api/home";
import { Banner } from "@/utils/types";
import { onMounted, ref } from "vue";
export function useBanner() {
  const bannerList = ref<Banner[]>([]);
  const getBannerList = async () => {
    const res = await getBannerAPI({ distributionSite: "2" });
    console.log(res);
    bannerList.value = res.result;
  };
  onMounted(() => getBannerList());

  return {
    bannerList,
  };
}
