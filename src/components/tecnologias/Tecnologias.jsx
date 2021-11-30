import React from 'react';
import s from './Tecnologias.module.css';

export default function Tecnologias(){

    return (
        <div className={s.container} id="Tecnologias">
            <div>
                <h1>Tecnologias</h1>
            </div>
            <div className={s.tecno}>
                <div className={s.frontBack}>
                    <svg className={s.imgReact} role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 10.801562,5.1525498 c -0.126562,-0.0422 -0.253124,-0.082 -0.379687,-0.11953 0.02109,-0.0867 0.03984,-0.17344 0.05859,-0.26016 0.288281,-1.39687 0.09844,-2.51953 -0.5414063,-2.88984 -0.6164062,-0.35391 -1.621875,0.0141 -2.6390625,0.9 -0.1007813,0.0867 -0.1992188,0.17812 -0.2929688,0.26953 -0.063281,-0.0609 -0.1289062,-0.12188 -0.1945312,-0.18047 -1.0664063,-0.94688 -2.1351563,-1.34531 -2.775,-0.97266 -0.6140625,0.35625 -0.796875,1.41328 -0.5390625,2.73516 0.025781,0.13125 0.053906,0.26016 0.086719,0.39141 -0.15,0.0422 -0.2976562,0.0891 -0.4359375,0.13828 C 1.8976562,5.5978598 1,6.2822398 1,6.9900498 c 0,0.73125 0.95625,1.46484 2.2570313,1.91015 0.1054687,0.0352 0.2109375,0.0703 0.31875,0.10079 -0.035156,0.14062 -0.065625,0.2789 -0.09375,0.42187 C 3.2359375,10.72364 3.4281253,11.75489 4.0421875,12.1088 4.675,12.47442 5.7390625,12.0998 6.775,11.19239 c 0.082031,-0.0727 0.1640625,-0.14765 0.2460938,-0.22734 0.1031249,0.10078 0.2109375,0.19687 0.31875,0.29062 1.003125,0.8625 1.9945312,1.21172 2.60625,0.85782 0.6328122,-0.36563 0.8390622,-1.47422 0.5718752,-2.8242202 -0.02109,-0.10313 -0.04453,-0.2086 -0.07031,-0.31641 0.075,-0.0211 0.147656,-0.0445 0.220312,-0.068 C 12.020312,8.4572398 13,7.7330198 13,6.9900498 c 0,-0.71016 -0.923437,-1.39922 -2.198438,-1.8375 z m -3.1710932,-1.98985 c 0.871875,-0.75937 1.6851562,-1.05703 2.0554687,-0.84375 0.3960935,0.22735 0.5484375,1.1461 0.3,2.35313 -0.016406,0.0797 -0.032813,0.15703 -0.053906,0.23437 -0.5203127,-0.11718 -1.0476565,-0.20156 -1.577344,-0.24843 -0.3046875,-0.43594 -0.6375,-0.85313 -0.9984375,-1.24453 0.091406,-0.0867 0.1804687,-0.16875 0.2742187,-0.25079 z m -3.046875,4.43204 c 0.1078125,0.20625 0.2179687,0.41015 0.3351562,0.61171 0.1195312,0.20391 0.2414063,0.40782 0.3703125,0.60704 -0.365625,-0.0399 -0.7289062,-0.0984 -1.0875,-0.17579 0.103125,-0.3375 0.2320313,-0.68671 0.3820313,-1.04296 z m 0,-1.18594 c -0.1476563,-0.34922 -0.271875,-0.69141 -0.375,-1.02188 0.3375,-0.075 0.6960937,-0.13593 1.0687499,-0.18281 -0.1242187,0.19453 -0.2460937,0.39375 -0.3609375,0.59531 -0.1148437,0.19922 -0.2273437,0.40313 -0.3328124,0.60938 z m 0.2671875,0.59297 c 0.1546875,-0.32344 0.3234375,-0.63985 0.5015624,-0.95157 0.1781251,-0.31171 0.3703126,-0.61406 0.5718751,-0.91171 0.3515625,-0.0258 0.7101562,-0.0399 1.0757812,-0.0399 0.365625,0 0.7265625,0.0141 1.0757813,0.0399 0.1992187,0.29531 0.3890625,0.59765 0.5695312,0.90703 0.1804688,0.30937 0.3492188,0.62578 0.5085938,0.94687 -0.1570313,0.32344 -0.3257813,0.64219 -0.5062501,0.95625 -0.178125,0.31172 -0.3679687,0.61406 -0.5671874,0.91406 -0.3492188,0.0258 -0.7125,0.0375 -1.0804688,0.0375 -0.3679687,0 -0.7242188,-0.0117 -1.06875,-0.0328 -0.2039063,-0.29765 -0.3960938,-0.60234 -0.5765625,-0.91406 -0.1804687,-0.31172 -0.346875,-0.62813 -0.5039062,-0.95156 z m 4.2328125,1.2 c 0.1195312,-0.20625 0.2320312,-0.41485 0.3421875,-0.62578 0.15,0.33984 0.28125,0.68437 0.3960937,1.03828 -0.3632812,0.082 -0.73125,0.14531 -1.1015625,0.1875 0.1265625,-0.19688 0.2460938,-0.39844 0.3632813,-0.6 z m 0.3375,-1.79297 c -0.1101563,-0.20625 -0.2226563,-0.4125 -0.3398438,-0.61406 -0.1148437,-0.19922 -0.234375,-0.3961 -0.3585938,-0.59063 0.3773438,0.0469 0.7382813,0.11016 1.0757813,0.1875 -0.1078125,0.34688 -0.234375,0.68438 -0.3773438,1.01719 z m -2.4164063,-2.63672 c 0.2460938,0.26719 0.478125,0.54844 0.69375,0.83906 -0.4640625,-0.0211 -0.9304687,-0.0211 -1.3945312,0 0.2296875,-0.30234 0.4664062,-0.58359 0.7007812,-0.83906 z m -2.71875,-1.43672 c 0.39375,-0.22969 1.2679688,0.0984 2.1890625,0.91406 0.058594,0.0516 0.1171875,0.10782 0.178125,0.16407 -0.3632813,0.3914 -0.6984375,0.80859 -1.0054687,1.24453 -0.5296876,0.0469 -1.0546875,0.1289 -1.5750001,0.24375 -0.030469,-0.11953 -0.05625,-0.24141 -0.082031,-0.36328 -0.2203125,-1.13438 -0.075,-1.98985 0.2953125,-2.20313 z m -0.5742187,6.17813 c -0.098437,-0.0281 -0.1945313,-0.0586 -0.2906251,-0.0914 -0.4992187,-0.15703 -1.0664062,-0.40547 -1.4765625,-0.73125 -0.2367187,-0.16406 -0.3960937,-0.41719 -0.440625,-0.70078 0,-0.42891 0.740625,-0.97735 1.8093751,-1.35 0.1335937,-0.0469 0.2695312,-0.0891 0.4054687,-0.12891 0.159375,0.5086 0.3515625,1.00781 0.5742188,1.49063 -0.225,0.48984 -0.4195313,0.99609 -0.58125,1.51172 z M 6.4445313,10.81036 C 6.0578125,11.16427 5.6101562,11.44552 5.1226563,11.6377 4.8625,11.76192 4.5625,11.77364 4.2953125,11.6682 3.9226562,11.45258 3.7679687,10.62523 3.9789062,9.5119498 c 0.025781,-0.13125 0.053906,-0.2625 0.086719,-0.3914 0.525,0.1125 1.0546875,0.18984 1.5914062,0.22968 0.309375,0.43829 0.6492188,0.8578202 1.0125001,1.2515702 -0.075,0.0727 -0.1500001,0.14297 -0.225,0.20859 z M 7.01875,10.24083 C 6.7796875,9.9830198 6.540625,9.6970798 6.3085937,9.3900498 c 0.225,0.009 0.4570313,0.0141 0.6914063,0.0141 0.2414062,0 0.478125,-0.005 0.7125,-0.0164 -0.215625,0.29766 -0.4476563,0.58125 -0.69375,0.8531302 z m 3.063281,0.70312 c -0.02109,0.28594 -0.1617185,0.55313 -0.3867185,0.7336 -0.3726562,0.21562 -1.1671875,-0.0656 -2.025,-0.80156 C 7.5718755,10.79159 7.4734375,10.7002 7.3726562,10.60645 7.73125,10.21036 8.0617187,9.7908298 8.3617187,9.3501998 c 0.5367188,-0.0445 1.0710938,-0.12656 1.5984375,-0.24609 0.023437,0.0961 0.044531,0.19219 0.063281,0.28594 0.114844,0.50625 0.133594,1.0335902 0.05859,1.5539002 z m 0.426563,-2.5195302 c -0.06563,0.0211 -0.13125,0.0422 -0.199219,0.0609 -0.164062,-0.51094 -0.365625,-1.01016 -0.5976563,-1.49531 0.2250001,-0.47813 0.4148443,-0.97031 0.5742193,-1.47422 0.121875,0.0352 0.239062,0.0727 0.351562,0.11016 1.092188,0.375 1.858594,0.93281 1.858594,1.35937 0,0.45938 -0.817969,1.05234 -1.9875,1.43906 z M 7,5.9259898 c 0.5929688,0 1.0734375,0.48046 1.0734375,1.07343 0,0.59297 -0.4804687,1.07344 -1.0734375,1.07344 -0.5929688,0 -1.0734375,-0.48047 -1.0734375,-1.07344 0,-0.59297 0.4804687,-1.07343 1.0734375,-1.07343"/></svg>
                    <p className={s.p}>Front-End</p>
                    <div className={s.divSpan}>
                        <span>React</span>
                        <span>Redux</span>
                    </div>
                </div>
                <div className={s.frontBack}>
                    <svg className={s.imgDataBase} role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M1 11.2h12V8.8H1v2.4zm1.2-1.8h1.2v1.2H2.2V9.4zM1 2.8v2.4h12V2.8H1zm2.4 1.8H2.2V3.4h1.2v1.2zM1 8.2h12V5.8H1v2.4zm1.2-1.8h1.2v1.2H2.2V6.4z"/></svg>
                    <p className={s.p}>Back-End</p>
                    <div className={s.divSpan}>
                        <span>Node js</span>
                        <span>Express</span>
                        <span>PostgreSQL</span>
                        <span>Sequelize</span>
                    </div>
                </div>
            </div>
        </div>
    )
}