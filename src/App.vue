<template>
    <div id="app">
      <div class="page-container">
        <md-app>
          <md-app-toolbar class="md-primary">
            <span class="md-title">My Title</span>
          </md-app-toolbar>

          <md-app-drawer md-permanent="full">
            <md-toolbar class="md-transparent" md-elevation="0">
              Navigation
            </md-toolbar>

            <md-list>
              <md-list-item>
                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text"><router-link to="/">Home</router-link></span>
              </md-list-item>

              <md-list-item>
                <md-icon>send</md-icon>
                <span class="md-list-item-text"><router-link to="/auth">Auth</router-link></span>
              </md-list-item>

              <md-list-item>
                <md-icon>delete</md-icon>
                <span class="md-list-item-text"><router-link to="/success">Success</router-link></span>
              </md-list-item>

              <md-list-item>
                <md-icon>error</md-icon>
                <span class="md-list-item-text">Spam</span>
              </md-list-item>
            </md-list>
          </md-app-drawer>

          <md-app-content>
            <router-view></router-view>
          </md-app-content>
        </md-app>
      </div>
      
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>