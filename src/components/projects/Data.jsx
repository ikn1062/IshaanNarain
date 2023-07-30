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
import Img9 from "../../assets/modernr-1.gif"
import Img92 from "../../assets/modernr-2.jpg"


export const ProjectsData = [
    {
        id: 1,
        image: Img12,
        image2: Img1,
        title: 'Statistical RL in Robotics - Ongoing',
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
        link: "/IshaanNarain/#/slam",
    },
    {
        id: 3,
        image: Img32,
        image2: Img3,
        title: 'Zoom / Owl Videa Data Analysis',
        tags: 'Python3, OpenCV, Mediapipe, Slurm',
        category: 'Machine Learning',
        link: "/IshaanNarain/#/video",
    },
    {
        id: 4,
        image: Img42,
        image2: Img4,
        title: 'Haptic Virtual Reality Wand',
        tags: 'Embedded C, C#, Unity, UART, Mechatronics',
        category: 'Robotics',
        link: "/IshaanNarain/#/wand",
    },
    {
        id: 5,
        image: Img52,
        image2: Img5,
        title: 'Northwestern University Solar Car',
        tags: 'Matlab, Mechanical Design, Project Management',
        category: 'none',
        link: "/IshaanNarain/#/nusolar",
    },
    {
        id: 6,
        image: Img62,
        image2: Img6,
        title: 'Linux Custom Memory Management - Ongoing',
        tags: 'C, x86, Linux Kernel, GDB, QEMU, Memory',
        category: 'Computer Systems',
        link: "/IshaanNarain/#/memory",
    }, 
    {
        id: 7,
        image: Img82,
        image2: Img8,
        title: 'Compiler Construction Projects - Ongoing',
        tags: 'C, C++, Compiler, SQL',
        category: 'Computer Systems',        
        link: "/IshaanNarain/#/compiler",
    }, 
    {
        id: 8,
        image: Img72,
        image2: Img7,
        title: 'Mini Operating System - Ongoing',
        tags: 'C, ARM64, x86-64, GCC, GDB, stdlib',
        category: 'Computer Systems',        
        link: "/IshaanNarain/#/osdev",
    },
    {
        id: 9,
        image: Img92,
        image2: Img9,
        title: 'Robot Planning and Control',
        tags: 'Python, NumPy, Control Theory, Dynamics',
        category: 'Robotics',
        link: "/IshaanNarain/#/modernr",
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