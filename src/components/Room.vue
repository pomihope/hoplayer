<template>
    <v-container fluid d-flex justify-center align-center>
      <v-card class="youtube-player">
        <v-layout row wrap>
          <v-flex md8 xs12 class="youtube-frame">
            <youtube style="width: 100%" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
          </v-flex>
          <v-flex
            md4
            xs12
            style="max-height: 360px"
            class="scroll-y">
            <v-card>
              <v-list dense="" two-line>
                <template v-for="(video, index) in videos">
                  <v-divider
                    v-if="index>=1"
                    :key="index"
                  ></v-divider>

                  <v-list-tile
                    :key="video.title"
                    avatar
                    @click=""
                  >
                    <!-- 有頭貼 -->
                    <v-list-tile-avatar v-show="video.imageUrl">
                      <img :src="video.imageUrl" alt="avatar">
                    </v-list-tile-avatar>
                    <!-- 無頭貼 -->
                    <v-list-tile-avatar color="teal" v-show="!video.imageUrl">
                      <span class="white--text avatar-text">{{(video.title || '')[0]}}</span>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title v-html="video.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="video.author"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      },
      videos: [
        {
          title: 'Test1'
        },
        {
          title: 'Test2'
        },
        {
          title: 'Test3'
        },
        {
          title: 'Test4'
        },
        {
          title: 'Test5'
        },
        {
          title: 'Test6'
        },
        {
          title: 'Test7'
        }
      ]
    }
  },
  methods: {
    playing () {
      console.log('\\o/ we are watching!!!')
    }
  }
}
</script>

<style>
.youtube-frame {
  height: 360px;
}
.youtube-player {
  max-width: 800px;
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .youtube-player {
    margin-left: 100px;
    margin-right: 100px;
  }
}

</style>
