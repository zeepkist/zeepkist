import { fileURLToPath, URL } from 'node:url'

import createVuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/auth': {
        target: 'https://auth.zeepkist-gtr.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/auth/, '')
      }
    }
  },
  plugins: [
    createVuePlugin({
      reactivityTransform: true
    })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url))
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          'font-size-body-3': '0.875rem',
          'font-size-body-2': '0.75rem',
          'font-size-body-1': '0.75rem',
          'font-size-caption': '0.75rem',
          'font-size-title-1': '1rem',
          'font-size-title-2': '1.25rem',
          'font-size-title-3': '1.25rem',
          'font-size-display-1': '1.5rem',
          'font-size-display-2': '1.75rem',
          'font-size-display-3': '2.5rem',

          'primary-1': 'rgb(var(--orange-1))',
          'primary-2': 'rgb(var(--orange-2))',
          'primary-3': 'rgb(var(--orange-3))',
          'primary-4': 'rgb(var(--orange-4))',
          'primary-5': 'rgb(var(--orange-5))',
          'primary-6': 'rgb(var(--orange-6))',

          'dark-primary-1': 'rgb(var(--orange-1))',
          'dark-primary-2': 'rgb(var(--orange-2))',
          'dark-primary-3': 'rgb(var(--orange-3))',
          'dark-primary-4': 'rgb(var(--orange-4))',
          'dark-primary-5': 'rgb(var(--orange-5))',
          'dark-primary-6': 'rgb(var(--orange-6))',

          'link-1': 'rgb(var(--orange-1))',
          'link-2': 'rgb(var(--orange-2))',
          'link-3': 'rgb(var(--orange-3))',
          'link-4': 'rgb(var(--orange-4))',
          'link-5': 'rgb(var(--orange-5))',
          'link-6': 'rgb(var(--orange-6))',

          'dark-link-1': 'rgb(var(--orange-1))',
          'dark-link-2': 'rgb(var(--orange-2))',
          'dark-link-3': 'rgb(var(--orange-3))',
          'dark-link-4': 'rgb(var(--orange-4))',
          'dark-link-5': 'rgb(var(--orange-5))',
          'dark-link-6': 'rgb(var(--orange-6))',

          'color-bg-1': '#fff7ec',

          'dark-color-bg-1': '#222',
          'dark-color-bg-2': '#181818',
          'dark-color-bg-3': '#181818',
          'dark-color-bg-4': '#181818',
          'dark-color-bg-5': '#181818',
          'dark-color-bg-6': '#181818',

          'color-menu-dark-bg': '#181818',

          'dark-color-secondary': '#222',

          // Zeepkist Orange
          'orange-1': '#FFF9E8',
          'orange-2': '#FFEABA',
          'orange-3': '#FFD88B',
          'orange-4': '#FFC45D',
          'orange-5': '#FFAC2E',
          'orange-6': '#FF9200',
          'orange-7': '#D27000',
          'orange-8': '#A65300',
          'orange-9': '#793900',
          'orange-10': '#4D2100',

          // Zeepkist Yellow
          'yellow-1': '#FEFFE8',
          'yellow-2': '#FEFEBE',
          'yellow-3': '#FDFA94',
          'yellow-4': '#FCF26B',
          'yellow-5': '#FBE842',
          'yellow-6': '#FADC19',
          'yellow-7': '#CFAF0F',
          'yellow-8': '#A38408',
          'yellow-9': '#785D03',
          'yellow-10': '#4D3800',

          'red-1': '#FFECE8',
          'red-2': '#FACBC3',
          'red-3': '#F5A8A0',
          'red-4': '#EF867E',
          'red-5': '#EA625D',
          'red-6': '#E53E3E',
          'red-7': '#BF272C',
          'red-8': '#99151D',
          'red-9': '#730812',
          'red-10': '#4D000A',

          'orangered-1': '#FFF3E8',
          'orangered-2': '#FDDDC3',
          'orangered-3': '#FCC59F',
          'orangered-4': '#FAAC7B',
          'orangered-5': '#F99057',
          'orangered-6': '#F77234',
          'orangered-7': '#CC5120',
          'orangered-8': '#A23511',
          'orangered-9': '#771F06',
          'orangered-10': '#4D0E00',

          'gold-1': '#FFFCE8',
          'gold-2': '#FFF6C3',
          'gold-3': '#FFED9E',
          'gold-4': '#FFE278',
          'gold-5': '#FFD453',
          'gold-6': '#FFC42E',
          'gold-7': '#D2991C',
          'gold-8': '#A6710F',
          'gold-9': '#794D05',
          'gold-10': '#4D2D00',

          'lime-1': '#FCFFE8',
          'lime-2': '#EDF8BB',
          'lime-3': '#DCF190',
          'lime-4': '#C9E968',
          'lime-5': '#B5E241',
          'lime-6': '#9FDB1D',
          'lime-7': '#7EB712',
          'lime-8': '#5F940A',
          'lime-9': '#437004',
          'lime-10': '#2A4D00',

          'green-1': '#E8FFEF',
          'green-2': '#BCECCC',
          'green-3': '#95D9AE',
          'green-4': '#72C794',
          'green-5': '#53B47D',
          'green-6': '#38A169',
          'green-7': '#248C58',
          'green-8': '#157749',
          'green-9': '#08623B',
          'green-10': '#004D2E',

          'cyan-1': '#E8FFFF',
          'cyan-2': '#B4F5F7',
          'cyan-3': '#83E8EF',
          'cyan-4': '#54D9E8',
          'cyan-5': '#29C7E0',
          'cyan-6': '#00B5D8',
          'cyan-7': '#0091B5',
          'cyan-8': '#007092',
          'cyan-9': '#00526F',
          'cyan-10': '#00364D',

          'blue-1': '#E8F7FF',
          'blue-2': '#C3E7FE',
          'blue-3': '#9FD4FD',
          'blue-4': '#7BC0FC',
          'blue-5': '#57A9FB',
          'blue-6': '#3491FA',
          'blue-7': '#206CCF',
          'blue-8': '#114BA3',
          'blue-9': '#063078',
          'blue-10': '#001A4D',

          'arcoblue-1': '#E8F8FF',
          'arcoblue-2': '#BEE2F5',
          'arcoblue-3': '#97CBEB',
          'arcoblue-4': '#72B3E2',
          'arcoblue-5': '#509BD8',
          'arcoblue-6': '#3182CE',
          'arcoblue-7': '#1F64AE',
          'arcoblue-8': '#11498D',
          'arcoblue-9': '#06316D',
          'arcoblue-10': '#001D4D',

          'purple-1': '#F3E8FF',
          'purple-2': '#DDC8F7',
          'purple-3': '#C7AAEE',
          'purple-4': '#B08EE6',
          'purple-5': '#9873DD',
          'purple-6': '#805AD5',
          'purple-7': '#5B39B3',
          'purple-8': '#3B1F91',
          'purple-9': '#210C6F',
          'purple-10': '#0E004D',

          'pinkpurple-1': '#FFE8F0',
          'pinkpurple-2': '#F7C2D6',
          'pinkpurple-3': '#EE9EC0',
          'pinkpurple-4': '#E67CAC',
          'pinkpurple-5': '#DD5D9B',
          'pinkpurple-6': '#D53F8C',
          'pinkpurple-7': '#B32874',
          'pinkpurple-8': '#91155D',
          'pinkpurple-9': '#6F0847',
          'pinkpurple-10': '#4D0032',

          'magenta-1': '#FFE8F1',
          'magenta-2': '#FDC2DB',
          'magenta-3': '#FB9DC7',
          'magenta-4': '#F979B7',
          'magenta-5': '#F754A8',
          'magenta-6': '#F5319D',
          'magenta-7': '#CB1E83',
          'magenta-8': '#A11069',
          'magenta-9': '#77064F',
          'magenta-10': '#4D0034',

          'gray-1': '#f7f8fa',
          'gray-2': '#f2f3f5',
          'gray-3': '#e5e6eb',
          'gray-4': '#c9cdd4',
          'gray-5': '#a9aeb8',
          'gray-6': '#86909c',
          'gray-7': '#6b7785',
          'gray-8': '#4e5969',
          'gray-9': '#272e3b',
          'gray-10': '#1d2129',

          'dark-red-1': '#4D000A',
          'dark-red-2': '#730711',
          'dark-red-3': '#99171F',
          'dark-red-4': '#BF2E33',
          'dark-red-5': '#E54C4C',
          'dark-red-6': '#EA6762',
          'dark-red-7': '#EF8B84',
          'dark-red-8': '#F5AEA7',
          'dark-red-9': '#FAD2CB',
          'dark-red-10': '#FFF3F0',

          'dark-orangered-1': '#4D0E00',
          'dark-orangered-2': '#771E05',
          'dark-orangered-3': '#A23714',
          'dark-orangered-4': '#CC5729',
          'dark-orangered-5': '#F77E45',
          'dark-orangered-6': '#F9925A',
          'dark-orangered-7': '#FAAD7D',
          'dark-orangered-8': '#FCC6A1',
          'dark-orangered-9': '#FDDEC5',
          'dark-orangered-10': '#FFF4EB',

          'dark-orange-1': '#4D2100',
          'dark-orange-2': '#793B04',
          'dark-orange-3': '#A6580A',
          'dark-orange-4': '#D27913',
          'dark-orange-5': '#FF9F1F',
          'dark-orange-6': '#FFA926',
          'dark-orange-7': '#FFC257',
          'dark-orange-8': '#FFD787',
          'dark-orange-9': '#FFE9B8',
          'dark-orange-10': '#FFF9E8',

          'dark-gold-1': '#4D2D00',
          'dark-gold-2': '#794D06',
          'dark-gold-3': '#A67314',
          'dark-gold-4': '#D29D28',
          'dark-gold-5': '#FFCA42',
          'dark-gold-6': '#FFD454',
          'dark-gold-7': '#FFE37B',
          'dark-gold-8': '#FFEEA1',
          'dark-gold-9': '#FFF7C7',
          'dark-gold-10': '#FFFDED',

          'dark-yellow-1': '#4D3800',
          'dark-yellow-2': '#785E07',
          'dark-yellow-3': '#A38614',
          'dark-yellow-4': '#CFB325',
          'dark-yellow-5': '#FAE13C',
          'dark-yellow-6': '#FBE94B',
          'dark-yellow-7': '#FCF374',
          'dark-yellow-8': '#FDFA9D',
          'dark-yellow-9': '#FEFEC6',
          'dark-yellow-10': '#FEFFF0',

          'dark-lime-1': '#2A4D00',
          'dark-lime-2': '#447006',
          'dark-lime-3': '#629412',
          'dark-lime-4': '#84B723',
          'dark-lime-5': '#A8DB39',
          'dark-lime-6': '#B8E24B',
          'dark-lime-7': '#CBE970',
          'dark-lime-8': '#DEF198',
          'dark-lime-9': '#EEF8C2',
          'dark-lime-10': '#FDFFEE',

          'dark-green-1': '#004D2E',
          'dark-green-2': '#0B623C',
          'dark-green-3': '#1A774B',
          'dark-green-4': '#2E8C5D',
          'dark-green-5': '#46A171',
          'dark-green-6': '#63B486',
          'dark-green-7': '#81C79D',
          'dark-green-8': '#A2D9B6',
          'dark-green-9': '#C8ECD4',
          'dark-green-10': '#F2FFF6',

          'dark-cyan-1': '#00364D',
          'dark-cyan-2': '#04536F',
          'dark-cyan-3': '#0C7392',
          'dark-cyan-4': '#1695B5',
          'dark-cyan-5': '#23BBD8',
          'dark-cyan-6': '#2DC8E0',
          'dark-cyan-7': '#58D9E8',
          'dark-cyan-8': '#86E8EF',
          'dark-cyan-9': '#B7F5F7',
          'dark-cyan-10': '#EBFFFF',

          'dark-blue-1': '#001A4D',
          'dark-blue-2': '#052F78',
          'dark-blue-3': '#134CA3',
          'dark-blue-4': '#2971CF',
          'dark-blue-5': '#469AFA',
          'dark-blue-6': '#5AAAFB',
          'dark-blue-7': '#7DC1FC',
          'dark-blue-8': '#A1D5FD',
          'dark-blue-9': '#C6E8FE',
          'dark-blue-10': '#EAF8FF',

          'dark-arcoblue-1': '#001D4D',
          'dark-arcoblue-2': '#07326D',
          'dark-arcoblue-3': '#154B8D',
          'dark-arcoblue-4': '#2868AE',
          'dark-arcoblue-5': '#3F89CE',
          'dark-arcoblue-6': '#549DD8',
          'dark-arcoblue-7': '#77B5E2',
          'dark-arcoblue-8': '#9DCDEB',
          'dark-arcoblue-9': '#C6E5F5',
          'dark-arcoblue-10': '#F2FBFF',

          'dark-purple-1': '#0E004D',
          'dark-purple-2': '#200A6F',
          'dark-purple-3': '#3B1F91',
          'dark-purple-4': '#5D3CB3',
          'dark-purple-5': '#8460D5',
          'dark-purple-6': '#A07FDD',
          'dark-purple-7': '#B698E6',
          'dark-purple-8': '#CCB3EE',
          'dark-purple-9': '#E1D0F7',
          'dark-purple-10': '#F6EEFF',

          'dark-pinkpurple-1': '#4D0032',
          'dark-pinkpurple-2': '#6F0A48',
          'dark-pinkpurple-3': '#91195F',
          'dark-pinkpurple-4': '#B33077',
          'dark-pinkpurple-5': '#D54C92',
          'dark-pinkpurple-6': '#DD639E',
          'dark-pinkpurple-7': '#E682AF',
          'dark-pinkpurple-8': '#EEA3C3',
          'dark-pinkpurple-9': '#F7C7D9',
          'dark-pinkpurple-10': '#FFECF3',

          'dark-magenta-1': '#4D0034',
          'dark-magenta-2': '#770850',
          'dark-magenta-3': '#A1176C',
          'dark-magenta-4': '#CB2B88',
          'dark-magenta-5': '#F545A6',
          'dark-magenta-6': '#F756A9',
          'dark-magenta-7': '#F97AB8',
          'dark-magenta-8': '#FB9EC8',
          'dark-magenta-9': '#FDC3DB',
          'dark-magenta-10': '#FFE8F1',

          'dark-gray-1': '#f7f8fa',
          'dark-gray-2': '#f2f3f5',
          'dark-gray-3': '#e5e6eb',
          'dark-gray-4': '#c9cdd4',
          'dark-gray-5': '#a9aeb8',
          'dark-gray-6': '#86909c',
          'dark-gray-7': '#6b7785',
          'dark-gray-8': '#4e5969',
          'dark-gray-9': '#272e3b',
          'dark-gray-10': '#1d2129'
        },
        javascriptEnabled: true
      }
    }
  }
})
