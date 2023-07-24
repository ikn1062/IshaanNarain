import Img1 from "../../assets/ergodic-1.jpg"
import Img12 from "../../assets/ergodic-2.jpg"
import Img2 from "../../assets/slam-1.jpg"
import Img22 from "../../assets/slam-2.jpg"
import Img3 from "../../assets/video-1.jpg"
import Img32 from "../../assets/video-2.jpg"
import Img4 from "../../assets/haptic-1.jpg"
import Img42 from "../../assets/haptic-2.jpg"
import Img5 from "../../assets/nusolar-1.jpg"
import Img52 from "../../assets/nusolar-2.jpg"
import Img6 from "../../assets/mmap-1.jpg"
import Img62 from "../../assets/mmap-2.jpg"
import Img7 from "../../assets/os-1.jpg"
import Img72 from "../../assets/os-2.jpg"
import Img8 from "../../assets/compiler-1.jpg"
import Img82 from "../../assets/compiler-2.jpg"


export const ProjectsData = [
    {
        id: 1,
        image: Img12,
        image2: Img1,
        title: 'Statistical RL in Robotics ',
        tags: 'C++, STL, CMake, ROS2, ML, Control, Linear Alg',
        category: 'Robotics, Machine Learning',
        link: "https://github.com/ikn1062/roboti-irl/",
    },
    {
        id: 2,
        image: Img22,
        image2: Img2,
        title: 'TurtleBot3 EKF SLAM',
        tags: 'C++, ROS2, ML, CMake, Catch2',
        category: 'Robotics, Machine Learning',
        link: "https://github.com/ikn1062/turtlebot-slam/",
    },
    {
        id: 3,
        image: Img32,
        image2: Img3,
        title: 'Zoom / Owl Videa Data Analysis',
        tags: 'Python3, OpenCV, Mediapipe, Slurm',
        category: 'Machine Learning',
        link: "https://github.com/ikn1062/video_analysis",
    },
    {
        id: 4,
        image: Img42,
        image2: Img4,
        title: 'Haptic Virtual Reality Wand',
        tags: 'Embedded C, C#, Unity, UART, Mechatronics',
        category: 'Robotics',
        link: "https://www.mccormick.northwestern.edu/news/articles/2022/06/design-studio-students-show-off-high-performance-robots/",
    },
    {
        id: 5,
        image: Img52,
        image2: Img5,
        title: 'Northwestern University Solar Car',
        tags: 'Matlab, Mechanical Design, Project Management',
        category: 'none',
        link: "https://nusolar.org",
    },
    {
        id: 6,
        image: Img62,
        image2: Img6,
        title: 'Linux Custom Memory Management - Ongoing',
        tags: 'C, x86, Linux Kernel, GDB, QEMU, Memory',
        category: 'Computer Systems',
        link: "/#projects-id",
    }, 
    {
        id: 7,
        image: Img82,
        image2: Img8,
        title: 'Compiler Construction Projects - Ongoing',
        tags: 'C, C++, Compiler, SQL',
        category: 'Computer Systems',        
        link: "/#projects-id",
    }, 
    {
        id: 8,
        image: Img72,
        image2: Img7,
        title: 'Mini Operating System - Ongoing',
        tags: 'C, i386-elf, GCC, GDB, stdlib',
        category: 'Computer Systems',        
        link: "/#projects-id",
    },  
]

export const ProjectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Robotics',
    },
    {
        name: 'Computer Systems',
    },
    {
        name: 'Machine Learning',
    }
]