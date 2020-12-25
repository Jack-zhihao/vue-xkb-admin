/*
 * @Author: zhihao
 * @Date: 2020-06-09 10:25:51
 * @LastEditTime: 2020-06-30 16:25:59
 * @LastEditors: Please set LastEditors
 * @Description: 播放器类文件
 * @FilePath: \xkb-admin\src\components\common\xkb-player\player_.js
 */
// eslint-disable
import $ from 'jquery'
import Hls from 'hls.js'
import flvjs from 'flv.js'
/**
 * @description: PC端 MP4 - M3U8 -FLV 播放器
 * @param {
 *  container：播放器容器id
 *  videoUrl: 播放链接
 *  scrollTxt：滚动条文字
 * }
 * @return:
 */
class ComPlayer {
  constructor (container, videoUrl, scrollTxt = '') {
    this.container = $(container) // 播放器容器
    this.videoUrl = videoUrl // 视频链接
    this.scrollTxt = scrollTxt // 滚动文字
    this.isScrollInterval = null
    this.video = null
    this.loop = false
    this.videoIndex = 0
    this.full = false
    this.timer = ''
    this.hidding = false
    this.isOn = true
    this.videoListLen = 1
    this.videoSpeed = 1
    this.danId = 0
    this.clickFlag = null
  }

  init () {
    this.initTemplate()
    this.video = $('#my-video')
    const video = this.video
    this.initPlayerType(this.videoUrl)
    const vm = this
    this.videoListLen = $('.player-list-video').length
    // 监听退出全屏事件
    document.addEventListener('fullscreenchange', function () {
      if (!vm.full) {
        vm.toFull()
      } else {
        vm.outFull()
      }
      vm.full = !vm.full
    })
    document.addEventListener('mozfullscreenchange', function () {
      if (!vm.full) {
        vm.toFull()
      } else {
        vm.outFull()
      }
      vm.full = !vm.full
    })
    document.addEventListener('webkitfullscreenchange', function () {
      if (!vm.full) {
        vm.toFull()
      } else {
        vm.outFull()
      }
      vm.full = !vm.full
    })
    document.addEventListener('MSFullscreenChange', function () {
      if (!vm.full) {
        vm.toFull()
      } else {
        vm.outFull()
      }
      vm.full = !vm.full
    })

    // 初始化声音
    vm.updateVolume(0, 0.9)
    vm.video.on('loadedmetadata', function () {
      $('#currentTime').text(vm.timeFormat(0))
      $('#duration').text(vm.timeFormat(video[0].duration) || '--：--')
      vm.enableProgressDrag()
      vm.enableSoundDrag()
      vm.playSpeed(vm.videoSpeed)
    })
    vm.video.on('timeupdate', function () {
      var currentTime = vm.video[0].currentTime
      var duration = vm.video[0].duration
      var percent = 100 * currentTime / duration
      $('.xkb-Video-timeBar').css('width', percent + '%')
      $('#currentTime').text(vm.timeFormat(currentTime))
    })
    vm.video.on('canplay', function () {
      $('.xkb-Video-loading').fadeOut(100)
    })
    vm.video.on('waiting', function () {
      $('.xkb-Video-loading').fadeIn(100)
    })
    vm.video.on('ended', function () {
      if (!vm.loop) {
        vm.videoIndex += 1
      }
      if (vm.videoIndex === vm.videoListLen) {
        vm.videoIndex = 0
      }
      for (var i = 0; i < vm.videoListLen; i++) {
        $('.player-list-video').eq(i).removeClass('video-now')
      }
      $('.player-list-video').eq(vm.videoIndex).addClass('video-now')
      vm.playAndPauseEnd()
    })

    $('.xkb-Video').hover(function () {
      vm.showControl(true)
    }, function () {
      vm.showControl(false)
    })
    // 判断鼠标是否在控制区，进入和出去改变this.isOn值，来触发是否开启延时函数
    $('.xkb-Video-shade').hover(function () {
      vm.isOn = false
    }, function () {
      vm.isOn = true
    })
    $('.player-list').hover(function () {
      vm.isOn = false
    }, function () {
      vm.isOn = true
    })
    $('body').on('mousemove', function () {
      vm.fillShow()
    })
    $('.xkb-Video-play-one').on('click', function () {
      vm.playAndPause()
    })
    $('.xkb-Video-play-btn').on('click', function () {
      if (!this.full || !this.hidding) {
        vm.playAndPause()
      }
    })

    $('.all').on('click', vm.launchFullScreen)
    $('#currentTime').text(vm.timeFormat(0))
    $('#duration').text(vm.timeFormat(vm.video[0].duration ? vm.video[0].duration : 1200))
    vm.enableProgressDrag()
    vm.enableSoundDrag()
    vm.playSpeed(vm.videoSpeed)
    $('#speed1Btn').on('click', function () {
      vm.playSpeed(1)
    })
    $('#speed2Btn').on('click', function () {
      vm.playSpeed(2)
    })
    $('#speed05Btn').on('click', function () {
      vm.playSpeed(0.5)
    })
    //  阻止事件冒泡
    $('.sound-list').bind('click', function (event) {
      event.stopPropagation()
    })
    $('.konge').bind('click', function (event) {
      event.stopPropagation()
    })
    $('#soundBtn').on('click', vm.soundAndMute)
    $('#loop').on('click', vm.isloop)
    vm.video.on('click', function () {
      vm.doOnClick()
    })
    vm.video.on('dblclick', function () {
      vm.doOnClick()
    })

    $('.xkb-Video-dan-btn').on('click', function () {
      vm.danOn()
    })

    $(window).keypress(function (e) {
      var isFocus = $('.xkb-Video-dan-input').is(':focus')
      var isControl = $('.xkb-Video-shade').hasClass('xkb-Video-shade-off')
      if (e.keyCode === 0 || e.keyCode === 32) {
        if (!isFocus || isControl) {
          vm.playAndPause()
        }
      }
      if (e.keyCode === 13) {
        if (isFocus) {
          vm.danOn()
        }
      }
    })
    $(window).keydown(function (e) {
      vm.keyTime(e.keyCode)
    })
  }

  // 播放器构造模板
  initTemplate () {
    const HTML = `
    <div class='xkb-Video'>
      <video src='' class='my-xkb-Video' id='my-video' name='videoElement' preload='metadata'></video>
      <div class='xkb-Video-loading'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class='xkb-Video-play-one'></div>
      <div id='copyright'></div>
      <div class='xkb-Video-shade xkb-Video-shade-on'>
        <input type='text' :value='scrollValue' id='scrollValue' style='opacity: 0;width:0'>
        <div class='xkb-Video-play-footer'>
          <div class='xkb-Video-progress'>
            <span class='xkb-Video-timeBar'></span>
          </div>
          <div class='xkb-Video-play-btn xkb-Video-stop'></div>
          <div class='xkb-Video-time'>
            <span id='currentTime'>00:00</span>
            <span>/</span>
            <span id='duration'>00:00</span>
          </div>
          <div class='xkb-Video-right-btn'>
            <div class='xkb-Video-btn all' style='display: none'></div>
            <div class='xkb-Video-btn loop' id='loop'></div>
            <div class='xkb-Video-btn set'>
              <div class='set-list'>
                <div class='play-speed'>播放速度</div>
                <div class='play-speed-list'>
                  <span id='speed05Btn'>X0.5</span>
                  <span class='moren' id='speed1Btn'>X1</span>
                  <span id='speed2Btn'>X2</span>
                </div>
              </div>
              <div class='konge1'></div>
            </div>
            <div class='xkb-Video-btn sound' id='soundBtn'>
              <div class='sound-list'>
                <div class='sound-number'>90</div>
                <div class='volume'>
                  <span class='volumeBar'></span>
                </div>
              </div>
              <div class='konge'></div>
            </div>
          </div>
        </div>
      </div>
    </div> `
    this.container.append(HTML)
  }

  // 选择播放类型
  initPlayerType (playUrl) {
    // 判断视频类型
    const videoType = playUrl.substring(playUrl.lastIndexOf('.') + 1).toUpperCase()
    switch (videoType) {
      case 'MP4':
        this.mp4Player(playUrl)
        break
      case 'M3U8':
        this.m3u8Player(playUrl)
        break
      case 'FLV':
        this.flvPlayer(playUrl)
        break
      default :
        alert('其他格式')
        break
    }
  }

  mp4Player (playUrl) {
    const video = document.getElementById('my-video')
    video.src = playUrl
    video.addEventListener('loadedmetadata', function () {
      // video.play()
    })
  }

  m3u8Player (playUrl) {
    const video = document.getElementById('my-video')
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(playUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        // video.play()
      })
    } else if (video.canPlayType('video/mp4')) {
      video.src = playUrl
      video.addEventListener('loadedmetadata', function () {
        // video.play()
      })
    }
  }

  flvPlayer (playUrl) {
    const video = document.getElementById('my-video')
    if (flvjs.isSupported()) {
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: playUrl
      })
      flvPlayer.attachMediaElement(video)
      flvPlayer.load()
      // flvPlayer.play()
    } else if (video.canPlayType('video/mp4')) {
      video.src = playUrl
      video.addEventListener('loadedmetadata', function () {
        // video.play()
      })
    }
  }

  // 读取初始时间
  timeFormat (seconds) {
    var minite = Math.floor(seconds / 60)
    if (minite < 10) {
      minite = '0' + minite
    }
    var second = Math.floor(seconds % 60)
    if (second < 10) {
      second = '0' + second
    }
    return minite + ':' + second
  }

  // 更新时间进度条
  updateProgress (x) {
    if (!this.full || !this.hidding) {
      var progress = $('.xkb-Video-progress')
      var position = x - progress.offset().left
      var percentage = 100 * position / progress.width()
      if (percentage > 100) {
        percentage = 100
      }
      if (percentage < 0) {
        percentage = 0
      }
      $('.xkb-Video-timeBar').css('width', percentage + '%')
      this.video[0].currentTime = this.video[0].duration * percentage / 100
    }
  }

  // 拖拽时间进度条
  enableProgressDrag () {
    if (!this.full || !this.hidding) {
      var progressDrag = false
      var this_ = this
      $('.xkb-Video-progress').on('mousedown', function (e) {
        progressDrag = true
        this_.updateProgress(e.pageX)
      })
      $(document).on('mouseup', function (e) {
        if (progressDrag) {
          progressDrag = false
          this_.updateProgress(e.pageX)
        }
      })
      $(document).on('mousemove', function (e) {
        if (progressDrag) {
          this_.updateProgress(e.pageX)
        }
      })
    }
  }

  // 控制栏展示消失
  showControl (shouldShow) {
    if (shouldShow) {
      $('.xkb-Video-shade').removeClass('xkb-Video-shade-off').addClass('xkb-Video-shade-on')
      $('.player-list').removeClass('player-list-off').addClass('player-list-on')
    } else {
      $('.xkb-Video-shade').removeClass('xkb-Video-shade-on').addClass('xkb-Video-shade-off')
      $('.player-list').removeClass('player-list-on').addClass('player-list-off')
    }
  }

  fillShow () {
    if (this.full) {
      if (this.hidding) {
        this.hidding = false
      }
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      $('.xkb-Video-shade').removeClass('xkb-Video-shade-off').addClass('xkb-Video-shade-on')
      $('.player-list').removeClass('player-list-off').addClass('player-list-on')
      this.video.attr('style', 'cursor:pointer')
      if (this.isOn) {
        this.timer = setTimeout(function () {
          this.hidding = true
          $('.xkb-Video-shade').removeClass('xkb-Video-shade-on').addClass('xkb-Video-shade-off')
          $('.player-list').removeClass('player-list-on').addClass('player-list-off')
          this.video.attr('style', 'cursor:none')
        }, 2000)
      }
    }
  }

  // 声音按钮
  soundAndMute () {
    if (!this.full || !this.hidding) {
      if (this.video[0].muted) {
        this.video[0].muted = false
        $('#soundBtn').removeClass('jinyin').addClass('sound')
        $('.volumeBar').css('height', (1 - this.video[0].volume) * 100 + '%')
        $('.sound-number').text(parseInt(this.video[0].volume * 100))
      } else {
        this.video[0].muted = true
        $('#soundBtn').removeClass('sound').addClass('jinyin')
        $('.sound-number').text(0)
        $('.volumeBar').css({ height: '50px' })
      }
    }
  }

  // 声音拖拽
  enableSoundDrag () {
    if (!this.full || !this.hidding) {
      var volumeDrag = false
      var this_ = this
      $('.volume').on('mousedown', function (e) {
        volumeDrag = true
        this_.updateVolume(e.pageY)
        this_.video[0].muted = false
        $('#soundBtn').removeClass('jinyin').addClass('sound')
      })
      $(document).on('mouseup', function (e) {
        if (volumeDrag) {
          volumeDrag = false
          this_.updateVolume(e.pageY)
        }
      })
      $(document).on('mousemove', function (e) {
        if (volumeDrag) {
          this_.updateVolume(e.pageY)
        }
      })
    }
  }

  // 更新声音
  updateVolume (y, vol) {
    if (!this.full || !this.hidding) {
      var volume = $('.volume')
      var soundTop = y - volume.offset() ? volume.offset().top : 0
      var percentage
      if (vol) {
        percentage = 100 - (vol * 100)
      } else {
        var position = soundTop
        percentage = 100 * position / 50
      }
      if (percentage > 100) {
        $('#soundBtn').removeClass('sound').addClass('jinyin')
        percentage = 100
      } else {
        $('#soundBtn').removeClass('jinyin').addClass('sound')
      }
      if (percentage < 0) {
        percentage = 0
      }
      percentage = parseInt(percentage)
      $('.sound-number').text(100 - percentage)
      $('.volumeBar').css('height', percentage + '%')
      this.video[0].volume = (100 - percentage) / 100
    }
  }

  // 开始暂停
  playAndPause () {
    if (this.video[0].paused || this.video[0].ended) {
      this.video[0].play()
      $('.xkb-Video-play-btn').removeClass('xkb-Video-stop').addClass('xkb-Video-play')
      $('.xkb-Video-play-one').hide()
      this.playSpeed(this.videoSpeed)
    } else {
      this.video[0].pause()
      $('.xkb-Video-play-btn').removeClass('xkb-Video-play').addClass('xkb-Video-stop')
      $('.xkb-Video-play-one').show()
    }
  }

  // 结束暂停
  playAndPauseEnd () {
    this.video[0].pause()
    $('.xkb-Video-play-btn').removeClass('xkb-Video-play').addClass('xkb-Video-stop')
    $('.xkb-Video-play-one').show()
  }

  // 播放速度
  playSpeed (speed) {
    if (!this.full || !this.hidding) {
      if (speed === 1) {
        $('#speed05Btn').removeClass('moren')
        $('#speed2Btn').removeClass('moren')
        $('#speed1Btn').addClass('moren')
        this.videoSpeed = 1
      } else if (speed === 2) {
        $('#speed05Btn').removeClass('moren')
        $('#speed1Btn').removeClass('moren')
        $('#speed2Btn').addClass('moren')
        this.videoSpeed = 2
      } else if (speed === 0.5) {
        $('#speed1Btn').removeClass('moren')
        $('#speed2Btn').removeClass('moren')
        $('#speed05Btn').addClass('moren')
        this.videoSpeed = 0.5
      }
      this.video[0].playbackRate = speed
    }
  }

  // 循环播放
  isloop () {
    if (!this.full || !this.hidding) {
      if (!this.loop) {
        $('#loop').removeClass('loop').addClass('loop-ture')
        this.video[0].loop = true
        this.loop = !this.loop
      } else {
        $('#loop').removeClass('loop-ture').addClass('loop')
        this.video[0].loop = false
        this.loop = !this.loop
      }
    }
  }

  // 弹幕
  danOn () {
    var danText = $('#scrollValue')[0].value || this.scrollTxt
    var zz = '^[ ]+$' // 正则判断是否全是空格
    var isK = new RegExp(zz)
    var danDom
    if (danText && !(isK.test(danText))) {
      var danIdNow = 'dan' + this.danId
      if (this.full) {
        danDom = '<span class="xkb-Video-dan-all xkb-Video-dan-value-full" id=""' + danIdNow + '</span>'
      } else {
        danDom = '<span class="xkb-Video-dan-all xkb-Video-dan-value" id=""' + danIdNow + '</span>'
      }
      $('.xkb-Video').prepend(danDom)
      if (this.danId % 3 === 1) {
        $('#' + danIdNow).css('margin-top', '30px')
      } else if (this.danId % 3 === 2) {
        $('#' + danIdNow).css('margin-top', '60px')
      }

      $('.xkb-Video-dan-all').on('animationend', function () {
        $('#' + this.id).remove()
      })
      this.danId += 1
      $('#' + danIdNow).text(danText)
      $('.xkb-Video-dan-input').val('')
    }
  }

  toFull () {
    $('.xkb-Video').addClass('full')
    this.video.addClass('full')
    $('.xkb-Video-dan').addClass('xkb-Video-dan-full')
    $('.xkb-Video-dan-input').addClass('xkb-Video-dan-input-full')
    $('.xkb-Video-shade').addClass('xkb-Video-shade-full')
    this.timer = setTimeout(function () {
      this.hidding = true
      $('.xkb-Video-shade').removeClass('xkb-Video-shade-on').addClass('xkb-Video-shade-off')
      $('.player-list').removeClass('player-list-on').addClass('player-list-off')
      this.video.attr('style', 'cursor:none')
    }, 2000)
  }

  outFull () {
    clearTimeout(this.timer)
    this.video.removeClass('full')
    $('.xkb-Video').removeClass('full')
    $('.xkb-Video-shade').removeClass('xkb-Video-shade-full')
    $('.xkb-Video-shade').removeClass('xkb-Video-shade-off').addClass('xkb-Video-shade-on')
    $('.player-list').removeClass('player-list-off').addClass('player-list-on')
    this.video.attr('style', 'cursor:pointer')
    $('.xkb-Video-dan').removeClass('xkb-Video-dan-full')
    $('.xkb-Video-dan-input').removeClass('xkb-Video-dan-input-full')
  }

  // 全屏
  doOnClick () {
    if (this.clickFlag) {
      this.clickFlag = clearTimeout(this.clickFlag)
    }
    const this_ = this
    this.clickFlag = setTimeout(function () {
      this_.playAndPause()
    }, 300)
  }

  doOnDblClick () {
    if (this.clickFlag) {
      this.clickFlag = clearTimeout(this.clickFlag)
    }
    this.launchFullScreen()
  }

  keyTime (key) {
    var keyPercent
    var keyCurrentTime
    var keyDuration
    if (key === 39) {
      keyCurrentTime = this.video[0].currentTime + 10
      keyDuration = this.video[0].duration
      keyPercent = 100 * keyCurrentTime / keyDuration
      $('.xkb-Video-timeBar').css('width', keyPercent + '%')
      $('#currentTime').text(this.timeFormat(keyCurrentTime))
      this.video[0].currentTime = keyCurrentTime
    }
    if (key === 37) {
      keyCurrentTime = this.video[0].currentTime - 10
      keyDuration = this.video[0].duration
      keyPercent = 100 * keyCurrentTime / keyDuration
      $('.xkb-Video-timeBar').css('width', keyPercent + '%')
      $('#currentTime').text(this.timeFormat(keyCurrentTime))
      this.video[0].currentTime = keyCurrentTime
    }
  }

  // 全屏
  launchFullScreen () {
    if (!this.full || !this.hidding) {
      var element = document.documentElement
      if (!this.full) {
        if (element.requestFullScreen) {
          element.requestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        }
      }
    }
  }
}

export default ComPlayer
