import React from 'react'
import ChannelRow from "./ChannelRow";
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>필터</h2>
        </div>
        <hr />

        <ChannelRow 
            image="https://yt3.ggpht.com/SCXvQ4Lh4MTHZ5wZ35A7JLCCC7vT2O08apvQTL2oE_3QeVyBh7ZjNZlAKHqlrtB0Wx67r5dRZrs=s176-c-k-c0x00ffffff-no-rj-mo"
            Channel="어쩌다 셔터맨"
            subs="32만 명"
            noOfVideos="1만 개"
            description="안녕하세요 어쩌다 셔터맨입니다"
        />

        <hr />

        <VideoRow 
            views="1.4만회"
            description="Do you want a FREE one hour training... check"
            timestamp="59초 전"
            channel="어쩌다 셔터맨"
            title="셔터맨의 앞치마컬!! 65kg"
            image="https://i.ytimg.com/vi_webp/6JZpf27Ktes/hq2.webp"
        />
        <VideoRow 
            views="7.3만회"
            description=""
            timestamp="1개월 전"
            channel="어쩌다 셔터맨"
            title="1-2 완전 마르진 않은 셔터맨의 케이블 자전거에 바람 넣기"
            image="https://i.ytimg.com/vi_webp/2_qktpwhG5I/hq2.webp"
        />
        <VideoRow 
            views="3.6만회"
            description=""
            timestamp ="9일 전"
            channel="어쩌다 셔터맨"
            title="셔터맨의 only 앞치마 장비 풀스쿼트"
            image="https://i.ytimg.com/vi_webp/XMwCqfla7rw/hq2.webp"
        />
        <VideoRow 
            views="3.1만회"
            description=""
            timestamp="3개월 전"
            channel="어쩌다 셔터맨"
            title="1-1 완전 마르지 않은 멸치 셔터맨의 누워서 바벨 내렸다 올리기"
            image="https://i.ytimg.com/vi_webp/JNX_CXaKQFI/hq2.webp"
        />
        <VideoRow 
            views="6.1만회"
            description=""
            timestamp="2일 전"
            channel="어쩌다 셔터맨"
            title="셔터맨 앞치마 풀스쿼트 RM갱신! 140kg"
            image="https://i.ytimg.com/vi_webp/cYEhnM2B83Y/hq2.webp"
        />
        
        
    </div>
  )
}

export default SearchPage