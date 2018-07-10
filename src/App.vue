<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app>
      <v-list>
        <template v-for="room in roomList">
          <v-list-tile :key="room.text" @click="() => route(room)" avatar>
            <!-- 有頭貼 -->
            <v-list-tile-avatar v-show="room.image">
              <img :src="room.image" alt="avatar">
            </v-list-tile-avatar>
            <!-- 無頭貼 -->
            <v-list-tile-avatar color="teal" v-show="!room.image">
              <span class="white--text avatar-text">{{(room.name || '')[0]}}</span>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ room.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span class="mx-auto">重返榮耀</span>
    </v-footer>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>設定暱稱</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="userName"
              prepend-icon="person"
              name="userName"
              label="暱稱"
              type="text"
              autofocus="true"
              v-on:keyup.enter="setUserName">
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" v-on:click="setUserName">確定</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      dialog: true,
      roomList: [{image: '', name: '資工系重返榮耀'}],
      userName: undefined
    }),
    methods: {
      setUserName () {
        if (this.userName) {
          this.dialog = false
        }
      }
    },
    props: {
      source: String
    }
  }
</script>

<style scoped>
</style>
