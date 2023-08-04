import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data: platform } = usePlatforms();
  return platform?.results.find((p) => p.id === platformId);
};

export default usePlatform;
