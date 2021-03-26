import React from 'react';
import { MdAddAPhoto } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { BsFolderPlus } from "react-icons/bs";
import { GrTableAdd } from "react-icons/gr";
import { GrScheduleNew } from "react-icons/gr";
import { BsLink } from "react-icons/bs";

export const editorItems = [
    {
        icon: <MdAddAPhoto size="24" color="fff"/>,
        title: '사진',
        cName: 'addPhoto'
    },
    {
        icon: <BsCameraVideo size="24" color="fff"/>,
        title: '동영상',
        cName: 'addVideo'
    },    
    {
        icon: <BsFolderPlus size="24" color="fff"/>,
        title: '파일',
        cName: 'addFolder'
    },
    {
        icon: <GrTableAdd size="24" color="fff"/>,
        title: '표',
        cName: 'addTable'
    },
    {
        icon: <GrScheduleNew size="24" color="fff"/>,
        title: '링크',
        cName: 'addCalender'
    },
    {
        icon: <BsLink size="24" color="fff"/>,
        url: '#',
        cName: 'addLink'
    }

]