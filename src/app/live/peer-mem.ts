import * as SimplePeer from 'simple-peer';
export interface Chat {
    msg: string,
    to: string,
    from: string
}

export interface NewsPeer {
    peerId: string,
    peer: SimplePeer.Instance
}