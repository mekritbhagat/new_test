import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Renderer2, ViewChildren, ElementRef, QueryList  } from '@angular/core';
import { MatVideoComponent } from 'mat-video/lib/video.component';
import { ActivatedRoute } from '@angular/router';
import { SimplePeer } from 'simple-peer';
import { NewsPeer } from './peer-mem';
import { SignalService, SignalMessage } from './signal.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('video') matVideo: MatVideoComponent;
  videoSource = 'https://mdbootstrap.com/img/video/Sail-Away.mp4';
  video: HTMLVideoElement;

  isSize = true;
  ngclass = "mat-video-responsive";

  // src = "assets/NASA.mp4";
  // title = "NASA Rocket Launch";
  // width = 600;
  // height = 337.5;
  // currentTime = 0;
  // autoplay = false;
  // preload = true;
  // loop = false;
  // quality = true;
  // download = true;
  // fullscreen = true;
  // playsinline = false;
  // showFrameByFrame = false;
  // keyboard = true;
  // color = "primary";
  // spinner = "spin";
  // poster = "assets/NASA.jpg";
  // overlay = null;
  // muted = false;

  // roomName: string
  // mitronPeers: Array<NewsPeer> = new Array()

  // @ViewChild('myVideo')
  // myVideo: ElementRef<HTMLVideoElement>

  // @ViewChildren('peerVideo')
  // peerVideos: QueryList<ElementRef<HTMLVideoElement>>

  // constructor(
  //   private signalingService: SignalingService,
  //   private actRt: ActivatedRoute,
  //   private renderer: Renderer2
  // ) { }

  // ngOnInit(): void {

  //   this.video = this.matVideo.getVideoTag();
 
  //   // Use Angular renderer or addEventListener to listen for standard HTML5 video events
    
  //   this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
  //   this.video.addEventListener('ended', () => console.log('video ended'));

  //   this.roomName = this.actRt.snapshot.queryParams['roomName']

  //   navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 300 }, audio: true })
  //     .then(stream => {

  //       this.myVideo.nativeElement.srcObject = stream
  //       this.myVideo.nativeElement.play()

  //       this.signalingService.connect()

  //       this.signalingService.onConnect(() => {

  //         console.log(`My Socket Id ${this.signalingService.socketId}`)

  //         this.signalingService.requestForJoiningRoom({ roomName: this.roomName })

  //         this.signalingService.onRoomParticipants(participants => {
  //           console.log(`${this.signalingService.socketId} - On Room Participants`)
  //           console.log(participants)

  //           //this.signalingService.sendOfferSignal({ signalData: { type: 'offer', sdp: 'kldjfdfkgjdkjk' }, callerId: this.signalingService.socketId, calleeId: participants.find(id => id != this.signalingService.socketId) })
  //           this.initilizePeersAsCaller(participants, stream)
  //         })

  //         this.signalingService.onOffer(msg => {
  //           this.initilizePeersAsCallee(msg, stream)
  //         })

  //         this.signalingService.onAnswer(msg => {
  //           console.log(`${this.signalingService.socketId} - You got Answer from ${msg.calleeId}`)
  //           const mitronPeer = this.mitronPeers.find(mitronPeer => mitronPeer.peerId === msg.calleeId)
  //           mitronPeer.peer.signal(msg.signalData)
  //         })

  //         this.signalingService.onRoomLeft(socketId => {
  //           this.mitronPeers = this.mitronPeers.filter(mitronPeer => socketId != mitronPeer.peerId)
  //         })
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  // }

  // initilizePeersAsCaller(participants: Array<string>, stream: MediaStream) {
  //   const participantsExcludingMe = participants.filter(id => id != this.signalingService.socketId)
  //   participantsExcludingMe.forEach(peerId => {

  //     const peer: SimplePeer.Instance = new SimplePeer({
  //       initiator: true,
  //       trickle: false,
  //       stream
  //     })

  //     peer.on('signal', signal => {
  //       console.log(`${this.signalingService.socketId} Caller Block ${signal}`)
  //       this.signalingService.sendOfferSignal({ signalData: signal, callerId: this.signalingService.socketId, calleeId: peerId })
  //     })

  //     // peer.on('stream', stream => {
  //     //   this.peerVideos.first.nativeElement.srcObject = stream
  //     //   this.peerVideos.first.nativeElement.play()
  //     // })
  //     this.mitronPeers.push({ peerId: peerId, peer: peer })
  //   })
  // }

  // initilizePeersAsCallee(msg: SignalMessage, stream: MediaStream) {
  //   console.log(`${this.signalingService.socketId} You have an offer from ${msg.callerId}`)
  //   // this.signalingService.sendAnswerSignal({ signalData: msg.signalData, callerId: msg.callerId })

  //   const peer: SimplePeer.Instance = new SimplePeer({
  //     initiator: false,
  //     trickle: false,
  //     stream
  //   })

  //   peer.on('signal', signal => {
  //     console.log(`${this.signalingService.socketId} Callee Block ${signal}`)
  //     this.signalingService.sendAnswerSignal({ signalData: signal, callerId: msg.callerId })
  //   })

  //   peer.signal(msg.signalData)
  //   this.mitronPeers.push({ peerId: msg.callerId, peer: peer })
  // }

  isCardExpanded = false;
  expand() {
    this.isCardExpanded = !this.isCardExpanded;
  }

}



