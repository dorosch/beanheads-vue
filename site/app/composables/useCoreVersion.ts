import corePackageJson from '../../../core/package.json'

/**
 * Core 패키지(beanheads-vue)의 버전을 가져오는 composable
 */
export const useCoreVersion = () => {
  return {
    version: corePackageJson.version
  }
} 