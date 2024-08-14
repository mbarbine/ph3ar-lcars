#!/bin/bash

# Define the base directory
BASE_DIR="lcars-nuxt-app"

# Create directories
mkdir -p $BASE_DIR/assets/css
mkdir -p $BASE_DIR/assets/fonts
mkdir -p $BASE_DIR/components/atoms
mkdir -p $BASE_DIR/components/molecules
mkdir -p $BASE_DIR/components/organisms
mkdir -p $BASE_DIR/components/templates
mkdir -p $BASE_DIR/composables
mkdir -p $BASE_DIR/directives
mkdir -p $BASE_DIR/layouts
mkdir -p $BASE_DIR/middleware
mkdir -p $BASE_DIR/pages
mkdir -p $BASE_DIR/plugins
mkdir -p $BASE_DIR/public/images
mkdir -p $BASE_DIR/public/localizations
mkdir -p $BASE_DIR/server/api
mkdir -p $BASE_DIR/static
mkdir -p $BASE_DIR/stores
mkdir -p $BASE_DIR/tests/unit
mkdir -p $BASE_DIR/tests/integration
mkdir -p $BASE_DIR/tests/e2e
mkdir -p $BASE_DIR/tests/visual-regression
mkdir -p $BASE_DIR/storybook
mkdir -p $BASE_DIR/cypress/integration
mkdir -p $BASE_DIR/cypress/plugins
mkdir -p $BASE_DIR/cypress/support

# Create files
touch $BASE_DIR/assets/css/main.css
touch $BASE_DIR/assets/css/lcars-theme.css
touch $BASE_DIR/assets/css/lcars-animations.css
touch $BASE_DIR/assets/fonts/LCARS_analog.ttf
touch $BASE_DIR/assets/fonts/LCARS_analog.woff
touch $BASE_DIR/assets/fonts/LCARS_analog.woff2
touch $BASE_DIR/components/atoms/LcarsButton.vue
touch $BASE_DIR/components/atoms/LcarsInput.vue
touch $BASE_DIR/components/atoms/LcarsIcon.vue
touch $BASE_DIR/components/molecules/LcarsForm.vue
touch $BASE_DIR/components/molecules/LcarsHeader.vue
touch $BASE_DIR/components/molecules/LcarsNotification.vue
touch $BASE_DIR/components/organisms/LcarsSidebar.vue
touch $BASE_DIR/components/organisms/LcarsNavbar.vue
touch $BASE_DIR/components/organisms/LcarsGrid.vue
touch $BASE_DIR/components/organisms/LcarsChart.vue
touch $BASE_DIR/components/organisms/LcarsDraggable.vue
touch $BASE_DIR/components/organisms/NotificationList.vue
touch $BASE_DIR/components/templates/DefaultLayout.vue
touch $BASE_DIR/components/templates/AuthLayout.vue
touch $BASE_DIR/components/templates/DashboardLayout.vue
touch $BASE_DIR/composables/useApi.js
touch $BASE_DIR/composables/useAuth.js
touch $BASE_DIR/composables/useTheme.js
touch $BASE_DIR/composables/useNotification.js
touch $BASE_DIR/composables/useFormValidation.js
touch $BASE_DIR/composables/useI18n.js
touch $BASE_DIR/composables/useAccessibility.js
touch $BASE_DIR/composables/useAnalytics.js
touch $BASE_DIR/directives/v-focus.js
touch $BASE_DIR/directives/v-click-outside.js
touch $BASE_DIR/directives/v-lazyload.js
touch $BASE_DIR/directives/v-draggable.js
touch $BASE_DIR/layouts/default.vue
touch $BASE_DIR/middleware/auth.js
touch $BASE_DIR/middleware/guest.js
touch $BASE_DIR/middleware/setTheme.js
touch $BASE_DIR/middleware/i18n.js
touch $BASE_DIR/pages/index.vue
touch $BASE_DIR/pages/about.vue
touch $BASE_DIR/pages/contact.vue
touch $BASE_DIR/pages/login.vue
touch $BASE_DIR/pages/dashboard.vue
touch $BASE_DIR/pages/register.vue
touch $BASE_DIR/pages/404.vue
touch $BASE_DIR/pages/analytics.vue
touch $BASE_DIR/plugins/theme-switcher.js
touch $BASE_DIR/plugins/notification.js
touch $BASE_DIR/plugins/auth.js
touch $BASE_DIR/plugins/pinia-plugin.js
touch $BASE_DIR/plugins/seo.js
touch $BASE_DIR/plugins/error-handler.js
touch $BASE_DIR/plugins/analytics.js
touch $BASE_DIR/plugins/pwa.js
touch $BASE_DIR/public/images/example.jpg
touch $BASE_DIR/public/images/logo.svg
touch $BASE_DIR/public/localizations/en.json
touch $BASE_DIR/public/localizations/fr.json
touch $BASE_DIR/server/api/hello.js
touch $BASE_DIR/server/api/auth.js
touch $BASE_DIR/server/api/analytics.js
touch $BASE_DIR/static/favicon.ico
touch $BASE_DIR/static/manifest.json
touch $BASE_DIR/static/robots.txt
touch $BASE_DIR/stores/auth.js
touch $BASE_DIR/stores/theme.js
touch $BASE_DIR/stores/notification.js
touch $BASE_DIR/stores/i18n.js
touch $BASE_DIR/stores/analytics.js
touch $BASE_DIR/tests/unit/useApiKey.spec.js
touch $BASE_DIR/tests/unit/useApi.spec.js
touch $BASE_DIR/tests/unit/featureToggle.spec.js
touch $BASE_DIR/tests/integration/HelloWorld.spec.js
touch $BASE_DIR/tests/e2e/login.spec.js
touch $BASE_DIR/tests/e2e/dashboard.spec.js
touch $BASE_DIR/tests/visual-regression/visual.spec.js
touch $BASE_DIR/.env
touch $BASE_DIR/storybook/main.js
touch $BASE_DIR/storybook/preview.js
touch $BASE_DIR/storybook/stories/LcarsButton.stories.js
touch $BASE_DIR/cypress/integration/login.spec.js
touch $BASE_DIR/cypress/integration/dashboard.spec.js
touch $BASE_DIR/cypress/plugins/index.js
touch $BASE_DIR/cypress/support/commands.js
touch $BASE_DIR/cypress/support/index.js
touch $BASE_DIR/tailwind.config.js
touch $BASE_DIR/nuxt.config.ts
touch $BASE_DIR/package.json
touch $BASE_DIR/README.md

echo "Directory structure created and files touched."

