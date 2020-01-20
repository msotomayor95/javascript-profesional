class MediaPlayer {
  constructor(config){
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
  }
  
  _initPlugins = () => {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  mute = () => this.media.muted = true
  unmute = () => this.media.muted = false

  play = () => this.media.play()
  
  pause = () => this.media.pause()

  togglePlay = () => this.media.paused? this.play() : this.pause()

  toggleMute = () => this.media.muted? this.unmute() : this.mute()
}

export default MediaPlayer