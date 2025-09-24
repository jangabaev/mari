import React from 'react'
import "./style.css"
const AnimatedLogo: React.FC<{ width?: number | string; height?: number | string }> = ({ width = "100%", height = "auto" }) => {
    return (
        <div
            className="animated-logo-wrapper"
            style={{ width: typeof width === "number" ? `${width}px` : width, height: typeof height === "number" ? `${height}px` : height }}
            dangerouslySetInnerHTML={{ __html: svgString }}
        />
    );
};

const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" width="1290" height="371" viewBox="0 0 1290 371" fill="none">
<g id="Group 11">
<mask id="mask0_143_1028" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1290" height="371">
<g id="MARI">
<path d="M329.49 7.75539C343.254 7.75539 354.438 18.9576 354.438 32.745V271.439H304.111V64.1974L193.995 165.448C184.532 174.065 169.907 174.065 160.013 165.448L49.8966 64.1974V271.439H0V32.745C0 18.9576 11.1837 7.75539 24.9483 7.75539H53.3378C59.3598 7.75539 65.3818 10.3405 70.1134 14.2182L177.219 112.884L283.895 14.2182C288.626 10.3405 294.648 7.75539 301.1 7.75539H329.49Z" fill="white" class="anim-path-0"/>
<path d="M530.992 0C606.697 0 667.777 61.6123 667.777 137.012V268.853H617.881V238.263H614.87C614.87 238.263 584.33 274.024 531.422 274.024C531.422 274.024 531.422 274.024 530.992 274.024C455.717 274.024 394.636 212.842 394.636 137.012C394.636 61.6123 455.717 0 530.992 0ZM530.992 224.045C578.738 224.045 617.881 184.837 617.881 137.012C617.881 89.187 578.738 50.41 530.992 50.41C483.246 50.41 444.533 89.187 444.533 137.012C444.533 184.837 483.246 224.045 530.992 224.045Z" fill="white" class="anim-path-1"/>
<path d="M844.899 0C920.604 0 981.685 61.6123 981.685 137.012C981.685 212.411 920.604 274.024 844.899 274.024C791.561 274.024 761.451 238.263 761.451 238.263H758.44V370.966H708.544V137.012C708.544 61.6123 769.624 0 844.899 0ZM844.899 224.045C892.645 224.045 931.788 184.837 931.788 137.012C931.788 89.187 892.645 50.41 844.899 50.41C797.153 50.41 758.44 89.187 758.44 137.012C758.44 184.837 797.153 224.045 844.899 224.045Z" fill="white" class="anim-path-2"/>
<path d="M1240.1 5.17027H1290V268.853H1240.1V238.263H1237.09C1237.09 238.263 1206.98 273.593 1154.07 274.024C1154.07 274.024 1153.64 274.024 1153.21 274.024C1077.94 274.024 1016.86 212.411 1016.86 137.012V5.17027H1066.76V137.012C1066.76 184.837 1105.47 224.045 1153.21 224.045C1200.96 224.045 1240.1 184.837 1240.1 137.012V5.17027Z" fill="white" class="anim-path-3"/>
</g>
</mask>
<g mask="url(#mask0_143_1028)">
<g id="Vector 1044" filter="url(#filter0_f_143_1028)">
<path d="M1290 249L4.76837e-05 249" stroke="url(#paint0_linear_143_1028)" stroke-width="150" class="anim-path-4"/>
</g>
<g id="Vector 1045" filter="url(#filter1_f_143_1028)">
<path d="M0 30L1290 30.0001" stroke="url(#paint1_linear_143_1028)" stroke-width="150" class="anim-path-5"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_143_1028" x="-100" y="74" width="1490" height="350" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_143_1028"/>
</filter>
<filter id="filter1_f_143_1028" x="-100" y="-145" width="1490" height="350" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_143_1028"/>
</filter>
<linearGradient id="paint0_linear_143_1028" x1="1290" y1="249.5" x2="4.37115e-08" y2="249.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#A3E635"/>
<stop offset="0.6875" stop-color="#3B82F6"/>
<stop offset="1" stop-color="#FF1F8F"/>
</linearGradient>
<linearGradient id="paint1_linear_143_1028" x1="-4.37114e-08" y1="30.5" x2="1290" y2="30.5001" gradientUnits="userSpaceOnUse">
<stop stop-color="#A3E635"/>
<stop offset="0.6875" stop-color="#3B82F6"/>
<stop offset="1" stop-color="#FF1F8F"/>
</linearGradient>
</defs>
<style id="motion-ainimations">
${`@keyframes motion-ainm-id-569_-0{0%{stroke-dasharray:0px,1791.675048828125px;stroke-dashoffset:0px;}50%{stroke-dasharray:895.8375244140625px,895.8375244140625px;stroke-dashoffset:-895.8375244140625px;}100%{stroke-dasharray:0px,1791.675048828125px;stroke-dashoffset:-2687.5125732421875px;}}
@keyframes motion-ainm-id-569_-1{0%{stroke-dasharray:0px,1498.456787109375px;stroke-dashoffset:0px;}50%{stroke-dasharray:749.2283935546875px,749.2283935546875px;stroke-dashoffset:-749.2283935546875px;}100%{stroke-dasharray:0px,1498.456787109375px;stroke-dashoffset:-2247.6851806640625px;}}
@keyframes motion-ainm-id-569_-2{0%{stroke-dasharray:0px,1702.5797119140625px;stroke-dashoffset:0px;}50%{stroke-dasharray:851.2898559570312px,851.2898559570312px;stroke-dashoffset:-851.2898559570312px;}100%{stroke-dasharray:0px,1702.5797119140625px;stroke-dashoffset:-2553.8695678710938px;}}
@keyframes motion-ainm-id-569_-3{0%{stroke-dasharray:0px,1423.619140625px;stroke-dashoffset:0px;}50%{stroke-dasharray:711.8095703125px,711.8095703125px;stroke-dashoffset:-711.8095703125px;}100%{stroke-dasharray:0px,1423.619140625px;stroke-dashoffset:-2135.4287109375px;}}
@keyframes motion-ainm-id-569_-4{0%{stroke-dasharray:0px,1290px;stroke-dashoffset:0px;}50%{stroke-dasharray:645px,645px;stroke-dashoffset:-645px;}100%{stroke-dasharray:0px,1290px;stroke-dashoffset:-1935px;}}
@keyframes motion-ainm-id-569_-5{0%{stroke-dasharray:0px,1290px;stroke-dashoffset:0px;}50%{stroke-dasharray:645px,645px;stroke-dashoffset:-645px;}100%{stroke-dasharray:0px,1290px;stroke-dashoffset:-1935px;}}`}
</style>
</svg>
`;



export default AnimatedLogo;