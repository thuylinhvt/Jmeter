/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 37847.0, "series": [{"data": [[0.0, 61.0], [0.1, 90.0], [0.2, 96.0], [0.3, 102.0], [0.4, 105.0], [0.5, 111.0], [0.6, 119.0], [0.7, 124.0], [0.8, 133.0], [0.9, 140.0], [1.0, 142.0], [1.1, 147.0], [1.2, 153.0], [1.3, 163.0], [1.4, 166.0], [1.5, 168.0], [1.6, 180.0], [1.7, 180.0], [1.8, 183.0], [1.9, 185.0], [2.0, 188.0], [2.1, 191.0], [2.2, 192.0], [2.3, 203.0], [2.4, 207.0], [2.5, 217.0], [2.6, 220.0], [2.7, 223.0], [2.8, 225.0], [2.9, 227.0], [3.0, 228.0], [3.1, 229.0], [3.2, 234.0], [3.3, 237.0], [3.4, 240.0], [3.5, 242.0], [3.6, 244.0], [3.7, 245.0], [3.8, 246.0], [3.9, 250.0], [4.0, 254.0], [4.1, 255.0], [4.2, 257.0], [4.3, 259.0], [4.4, 265.0], [4.5, 267.0], [4.6, 271.0], [4.7, 273.0], [4.8, 276.0], [4.9, 280.0], [5.0, 282.0], [5.1, 284.0], [5.2, 286.0], [5.3, 289.0], [5.4, 292.0], [5.5, 293.0], [5.6, 295.0], [5.7, 300.0], [5.8, 300.0], [5.9, 301.0], [6.0, 304.0], [6.1, 307.0], [6.2, 312.0], [6.3, 315.0], [6.4, 319.0], [6.5, 323.0], [6.6, 323.0], [6.7, 326.0], [6.8, 328.0], [6.9, 330.0], [7.0, 331.0], [7.1, 335.0], [7.2, 338.0], [7.3, 340.0], [7.4, 343.0], [7.5, 345.0], [7.6, 346.0], [7.7, 347.0], [7.8, 348.0], [7.9, 350.0], [8.0, 352.0], [8.1, 353.0], [8.2, 353.0], [8.3, 355.0], [8.4, 356.0], [8.5, 357.0], [8.6, 358.0], [8.7, 359.0], [8.8, 360.0], [8.9, 361.0], [9.0, 362.0], [9.1, 364.0], [9.2, 364.0], [9.3, 366.0], [9.4, 367.0], [9.5, 369.0], [9.6, 369.0], [9.7, 372.0], [9.8, 373.0], [9.9, 374.0], [10.0, 375.0], [10.1, 377.0], [10.2, 378.0], [10.3, 379.0], [10.4, 381.0], [10.5, 382.0], [10.6, 382.0], [10.7, 383.0], [10.8, 385.0], [10.9, 386.0], [11.0, 387.0], [11.1, 388.0], [11.2, 390.0], [11.3, 391.0], [11.4, 392.0], [11.5, 394.0], [11.6, 397.0], [11.7, 397.0], [11.8, 398.0], [11.9, 399.0], [12.0, 399.0], [12.1, 402.0], [12.2, 402.0], [12.3, 404.0], [12.4, 405.0], [12.5, 405.0], [12.6, 406.0], [12.7, 406.0], [12.8, 408.0], [12.9, 409.0], [13.0, 411.0], [13.1, 413.0], [13.2, 416.0], [13.3, 418.0], [13.4, 419.0], [13.5, 421.0], [13.6, 422.0], [13.7, 423.0], [13.8, 424.0], [13.9, 424.0], [14.0, 425.0], [14.1, 426.0], [14.2, 428.0], [14.3, 428.0], [14.4, 429.0], [14.5, 431.0], [14.6, 431.0], [14.7, 433.0], [14.8, 433.0], [14.9, 434.0], [15.0, 435.0], [15.1, 437.0], [15.2, 437.0], [15.3, 439.0], [15.4, 439.0], [15.5, 440.0], [15.6, 440.0], [15.7, 441.0], [15.8, 442.0], [15.9, 443.0], [16.0, 444.0], [16.1, 445.0], [16.2, 446.0], [16.3, 448.0], [16.4, 448.0], [16.5, 449.0], [16.6, 449.0], [16.7, 450.0], [16.8, 450.0], [16.9, 451.0], [17.0, 451.0], [17.1, 452.0], [17.2, 452.0], [17.3, 453.0], [17.4, 453.0], [17.5, 455.0], [17.6, 456.0], [17.7, 458.0], [17.8, 460.0], [17.9, 460.0], [18.0, 461.0], [18.1, 461.0], [18.2, 462.0], [18.3, 462.0], [18.4, 464.0], [18.5, 464.0], [18.6, 465.0], [18.7, 465.0], [18.8, 466.0], [18.9, 467.0], [19.0, 468.0], [19.1, 469.0], [19.2, 470.0], [19.3, 471.0], [19.4, 471.0], [19.5, 472.0], [19.6, 473.0], [19.7, 474.0], [19.8, 474.0], [19.9, 474.0], [20.0, 475.0], [20.1, 476.0], [20.2, 476.0], [20.3, 477.0], [20.4, 477.0], [20.5, 478.0], [20.6, 479.0], [20.7, 480.0], [20.8, 481.0], [20.9, 481.0], [21.0, 482.0], [21.1, 483.0], [21.2, 484.0], [21.3, 485.0], [21.4, 486.0], [21.5, 486.0], [21.6, 488.0], [21.7, 489.0], [21.8, 491.0], [21.9, 491.0], [22.0, 492.0], [22.1, 494.0], [22.2, 494.0], [22.3, 495.0], [22.4, 497.0], [22.5, 498.0], [22.6, 498.0], [22.7, 498.0], [22.8, 499.0], [22.9, 500.0], [23.0, 500.0], [23.1, 501.0], [23.2, 502.0], [23.3, 502.0], [23.4, 503.0], [23.5, 503.0], [23.6, 504.0], [23.7, 504.0], [23.8, 505.0], [23.9, 508.0], [24.0, 509.0], [24.1, 510.0], [24.2, 511.0], [24.3, 512.0], [24.4, 512.0], [24.5, 513.0], [24.6, 513.0], [24.7, 514.0], [24.8, 515.0], [24.9, 516.0], [25.0, 516.0], [25.1, 518.0], [25.2, 518.0], [25.3, 518.0], [25.4, 520.0], [25.5, 520.0], [25.6, 521.0], [25.7, 521.0], [25.8, 522.0], [25.9, 522.0], [26.0, 523.0], [26.1, 523.0], [26.2, 525.0], [26.3, 526.0], [26.4, 526.0], [26.5, 527.0], [26.6, 527.0], [26.7, 528.0], [26.8, 528.0], [26.9, 529.0], [27.0, 530.0], [27.1, 531.0], [27.2, 532.0], [27.3, 532.0], [27.4, 533.0], [27.5, 534.0], [27.6, 534.0], [27.7, 534.0], [27.8, 535.0], [27.9, 536.0], [28.0, 536.0], [28.1, 537.0], [28.2, 538.0], [28.3, 539.0], [28.4, 539.0], [28.5, 540.0], [28.6, 540.0], [28.7, 541.0], [28.8, 541.0], [28.9, 543.0], [29.0, 543.0], [29.1, 544.0], [29.2, 545.0], [29.3, 545.0], [29.4, 546.0], [29.5, 546.0], [29.6, 546.0], [29.7, 547.0], [29.8, 547.0], [29.9, 548.0], [30.0, 548.0], [30.1, 549.0], [30.2, 549.0], [30.3, 550.0], [30.4, 550.0], [30.5, 551.0], [30.6, 551.0], [30.7, 552.0], [30.8, 553.0], [30.9, 554.0], [31.0, 554.0], [31.1, 554.0], [31.2, 555.0], [31.3, 556.0], [31.4, 556.0], [31.5, 557.0], [31.6, 557.0], [31.7, 558.0], [31.8, 559.0], [31.9, 559.0], [32.0, 560.0], [32.1, 561.0], [32.2, 561.0], [32.3, 562.0], [32.4, 562.0], [32.5, 563.0], [32.6, 563.0], [32.7, 564.0], [32.8, 564.0], [32.9, 565.0], [33.0, 565.0], [33.1, 565.0], [33.2, 566.0], [33.3, 567.0], [33.4, 568.0], [33.5, 568.0], [33.6, 568.0], [33.7, 569.0], [33.8, 569.0], [33.9, 569.0], [34.0, 570.0], [34.1, 571.0], [34.2, 571.0], [34.3, 572.0], [34.4, 572.0], [34.5, 573.0], [34.6, 573.0], [34.7, 574.0], [34.8, 574.0], [34.9, 575.0], [35.0, 576.0], [35.1, 577.0], [35.2, 578.0], [35.3, 578.0], [35.4, 578.0], [35.5, 579.0], [35.6, 580.0], [35.7, 580.0], [35.8, 580.0], [35.9, 581.0], [36.0, 581.0], [36.1, 581.0], [36.2, 582.0], [36.3, 583.0], [36.4, 583.0], [36.5, 584.0], [36.6, 584.0], [36.7, 584.0], [36.8, 585.0], [36.9, 585.0], [37.0, 585.0], [37.1, 585.0], [37.2, 585.0], [37.3, 586.0], [37.4, 586.0], [37.5, 586.0], [37.6, 587.0], [37.7, 587.0], [37.8, 587.0], [37.9, 587.0], [38.0, 588.0], [38.1, 588.0], [38.2, 588.0], [38.3, 588.0], [38.4, 589.0], [38.5, 589.0], [38.6, 589.0], [38.7, 589.0], [38.8, 590.0], [38.9, 590.0], [39.0, 590.0], [39.1, 591.0], [39.2, 591.0], [39.3, 591.0], [39.4, 592.0], [39.5, 592.0], [39.6, 592.0], [39.7, 592.0], [39.8, 592.0], [39.9, 592.0], [40.0, 593.0], [40.1, 593.0], [40.2, 593.0], [40.3, 593.0], [40.4, 593.0], [40.5, 594.0], [40.6, 594.0], [40.7, 594.0], [40.8, 594.0], [40.9, 594.0], [41.0, 595.0], [41.1, 595.0], [41.2, 595.0], [41.3, 595.0], [41.4, 596.0], [41.5, 596.0], [41.6, 596.0], [41.7, 596.0], [41.8, 596.0], [41.9, 596.0], [42.0, 596.0], [42.1, 597.0], [42.2, 597.0], [42.3, 597.0], [42.4, 597.0], [42.5, 597.0], [42.6, 598.0], [42.7, 598.0], [42.8, 598.0], [42.9, 598.0], [43.0, 598.0], [43.1, 599.0], [43.2, 599.0], [43.3, 599.0], [43.4, 599.0], [43.5, 599.0], [43.6, 599.0], [43.7, 599.0], [43.8, 600.0], [43.9, 600.0], [44.0, 600.0], [44.1, 600.0], [44.2, 601.0], [44.3, 601.0], [44.4, 601.0], [44.5, 601.0], [44.6, 602.0], [44.7, 602.0], [44.8, 602.0], [44.9, 602.0], [45.0, 602.0], [45.1, 603.0], [45.2, 603.0], [45.3, 603.0], [45.4, 604.0], [45.5, 604.0], [45.6, 604.0], [45.7, 604.0], [45.8, 605.0], [45.9, 605.0], [46.0, 605.0], [46.1, 605.0], [46.2, 605.0], [46.3, 605.0], [46.4, 606.0], [46.5, 606.0], [46.6, 606.0], [46.7, 607.0], [46.8, 607.0], [46.9, 607.0], [47.0, 607.0], [47.1, 608.0], [47.2, 608.0], [47.3, 608.0], [47.4, 609.0], [47.5, 609.0], [47.6, 609.0], [47.7, 610.0], [47.8, 610.0], [47.9, 610.0], [48.0, 611.0], [48.1, 611.0], [48.2, 611.0], [48.3, 612.0], [48.4, 612.0], [48.5, 612.0], [48.6, 612.0], [48.7, 613.0], [48.8, 613.0], [48.9, 613.0], [49.0, 614.0], [49.1, 614.0], [49.2, 615.0], [49.3, 615.0], [49.4, 616.0], [49.5, 616.0], [49.6, 616.0], [49.7, 616.0], [49.8, 616.0], [49.9, 617.0], [50.0, 617.0], [50.1, 618.0], [50.2, 619.0], [50.3, 619.0], [50.4, 619.0], [50.5, 620.0], [50.6, 620.0], [50.7, 620.0], [50.8, 620.0], [50.9, 620.0], [51.0, 621.0], [51.1, 621.0], [51.2, 621.0], [51.3, 622.0], [51.4, 623.0], [51.5, 623.0], [51.6, 624.0], [51.7, 624.0], [51.8, 625.0], [51.9, 625.0], [52.0, 625.0], [52.1, 626.0], [52.2, 626.0], [52.3, 627.0], [52.4, 627.0], [52.5, 628.0], [52.6, 628.0], [52.7, 629.0], [52.8, 629.0], [52.9, 630.0], [53.0, 630.0], [53.1, 631.0], [53.2, 631.0], [53.3, 632.0], [53.4, 632.0], [53.5, 633.0], [53.6, 634.0], [53.7, 634.0], [53.8, 634.0], [53.9, 635.0], [54.0, 636.0], [54.1, 637.0], [54.2, 638.0], [54.3, 638.0], [54.4, 638.0], [54.5, 639.0], [54.6, 639.0], [54.7, 639.0], [54.8, 640.0], [54.9, 641.0], [55.0, 643.0], [55.1, 643.0], [55.2, 644.0], [55.3, 645.0], [55.4, 645.0], [55.5, 647.0], [55.6, 647.0], [55.7, 648.0], [55.8, 649.0], [55.9, 650.0], [56.0, 650.0], [56.1, 651.0], [56.2, 651.0], [56.3, 652.0], [56.4, 653.0], [56.5, 653.0], [56.6, 653.0], [56.7, 654.0], [56.8, 654.0], [56.9, 655.0], [57.0, 656.0], [57.1, 656.0], [57.2, 657.0], [57.3, 658.0], [57.4, 658.0], [57.5, 659.0], [57.6, 661.0], [57.7, 662.0], [57.8, 662.0], [57.9, 663.0], [58.0, 663.0], [58.1, 663.0], [58.2, 665.0], [58.3, 665.0], [58.4, 666.0], [58.5, 667.0], [58.6, 667.0], [58.7, 668.0], [58.8, 669.0], [58.9, 669.0], [59.0, 669.0], [59.1, 670.0], [59.2, 670.0], [59.3, 671.0], [59.4, 672.0], [59.5, 672.0], [59.6, 673.0], [59.7, 674.0], [59.8, 676.0], [59.9, 679.0], [60.0, 680.0], [60.1, 680.0], [60.2, 681.0], [60.3, 682.0], [60.4, 683.0], [60.5, 684.0], [60.6, 685.0], [60.7, 686.0], [60.8, 686.0], [60.9, 688.0], [61.0, 688.0], [61.1, 689.0], [61.2, 692.0], [61.3, 692.0], [61.4, 693.0], [61.5, 695.0], [61.6, 696.0], [61.7, 696.0], [61.8, 697.0], [61.9, 699.0], [62.0, 700.0], [62.1, 701.0], [62.2, 702.0], [62.3, 703.0], [62.4, 704.0], [62.5, 705.0], [62.6, 705.0], [62.7, 706.0], [62.8, 707.0], [62.9, 707.0], [63.0, 708.0], [63.1, 708.0], [63.2, 709.0], [63.3, 709.0], [63.4, 710.0], [63.5, 711.0], [63.6, 712.0], [63.7, 713.0], [63.8, 714.0], [63.9, 715.0], [64.0, 716.0], [64.1, 718.0], [64.2, 718.0], [64.3, 720.0], [64.4, 722.0], [64.5, 723.0], [64.6, 724.0], [64.7, 724.0], [64.8, 725.0], [64.9, 726.0], [65.0, 726.0], [65.1, 728.0], [65.2, 728.0], [65.3, 729.0], [65.4, 729.0], [65.5, 731.0], [65.6, 732.0], [65.7, 733.0], [65.8, 735.0], [65.9, 735.0], [66.0, 738.0], [66.1, 738.0], [66.2, 739.0], [66.3, 741.0], [66.4, 742.0], [66.5, 744.0], [66.6, 745.0], [66.7, 746.0], [66.8, 747.0], [66.9, 748.0], [67.0, 750.0], [67.1, 750.0], [67.2, 751.0], [67.3, 752.0], [67.4, 753.0], [67.5, 753.0], [67.6, 754.0], [67.7, 754.0], [67.8, 755.0], [67.9, 757.0], [68.0, 758.0], [68.1, 762.0], [68.2, 764.0], [68.3, 765.0], [68.4, 767.0], [68.5, 769.0], [68.6, 770.0], [68.7, 772.0], [68.8, 773.0], [68.9, 776.0], [69.0, 776.0], [69.1, 777.0], [69.2, 778.0], [69.3, 780.0], [69.4, 781.0], [69.5, 781.0], [69.6, 783.0], [69.7, 783.0], [69.8, 785.0], [69.9, 787.0], [70.0, 788.0], [70.1, 789.0], [70.2, 792.0], [70.3, 792.0], [70.4, 792.0], [70.5, 793.0], [70.6, 795.0], [70.7, 796.0], [70.8, 797.0], [70.9, 799.0], [71.0, 801.0], [71.1, 803.0], [71.2, 805.0], [71.3, 806.0], [71.4, 807.0], [71.5, 809.0], [71.6, 812.0], [71.7, 812.0], [71.8, 813.0], [71.9, 814.0], [72.0, 814.0], [72.1, 816.0], [72.2, 816.0], [72.3, 817.0], [72.4, 818.0], [72.5, 820.0], [72.6, 823.0], [72.7, 824.0], [72.8, 826.0], [72.9, 828.0], [73.0, 833.0], [73.1, 835.0], [73.2, 836.0], [73.3, 840.0], [73.4, 841.0], [73.5, 842.0], [73.6, 843.0], [73.7, 845.0], [73.8, 846.0], [73.9, 848.0], [74.0, 848.0], [74.1, 849.0], [74.2, 853.0], [74.3, 853.0], [74.4, 856.0], [74.5, 859.0], [74.6, 860.0], [74.7, 863.0], [74.8, 864.0], [74.9, 867.0], [75.0, 868.0], [75.1, 869.0], [75.2, 870.0], [75.3, 872.0], [75.4, 873.0], [75.5, 875.0], [75.6, 876.0], [75.7, 880.0], [75.8, 881.0], [75.9, 884.0], [76.0, 887.0], [76.1, 892.0], [76.2, 894.0], [76.3, 897.0], [76.4, 899.0], [76.5, 900.0], [76.6, 903.0], [76.7, 905.0], [76.8, 907.0], [76.9, 912.0], [77.0, 915.0], [77.1, 918.0], [77.2, 919.0], [77.3, 920.0], [77.4, 922.0], [77.5, 924.0], [77.6, 930.0], [77.7, 932.0], [77.8, 934.0], [77.9, 938.0], [78.0, 943.0], [78.1, 952.0], [78.2, 955.0], [78.3, 961.0], [78.4, 963.0], [78.5, 965.0], [78.6, 968.0], [78.7, 978.0], [78.8, 979.0], [78.9, 982.0], [79.0, 986.0], [79.1, 987.0], [79.2, 989.0], [79.3, 992.0], [79.4, 994.0], [79.5, 995.0], [79.6, 999.0], [79.7, 1005.0], [79.8, 1008.0], [79.9, 1010.0], [80.0, 1011.0], [80.1, 1014.0], [80.2, 1018.0], [80.3, 1028.0], [80.4, 1029.0], [80.5, 1033.0], [80.6, 1036.0], [80.7, 1037.0], [80.8, 1043.0], [80.9, 1045.0], [81.0, 1049.0], [81.1, 1051.0], [81.2, 1055.0], [81.3, 1061.0], [81.4, 1063.0], [81.5, 1069.0], [81.6, 1081.0], [81.7, 1086.0], [81.8, 1089.0], [81.9, 1091.0], [82.0, 1095.0], [82.1, 1099.0], [82.2, 1104.0], [82.3, 1110.0], [82.4, 1111.0], [82.5, 1113.0], [82.6, 1122.0], [82.7, 1125.0], [82.8, 1131.0], [82.9, 1139.0], [83.0, 1144.0], [83.1, 1148.0], [83.2, 1149.0], [83.3, 1152.0], [83.4, 1154.0], [83.5, 1161.0], [83.6, 1167.0], [83.7, 1172.0], [83.8, 1175.0], [83.9, 1186.0], [84.0, 1191.0], [84.1, 1196.0], [84.2, 1202.0], [84.3, 1207.0], [84.4, 1217.0], [84.5, 1219.0], [84.6, 1224.0], [84.7, 1228.0], [84.8, 1234.0], [84.9, 1240.0], [85.0, 1244.0], [85.1, 1251.0], [85.2, 1255.0], [85.3, 1261.0], [85.4, 1266.0], [85.5, 1273.0], [85.6, 1277.0], [85.7, 1282.0], [85.8, 1289.0], [85.9, 1294.0], [86.0, 1297.0], [86.1, 1301.0], [86.2, 1310.0], [86.3, 1316.0], [86.4, 1319.0], [86.5, 1324.0], [86.6, 1332.0], [86.7, 1336.0], [86.8, 1346.0], [86.9, 1350.0], [87.0, 1356.0], [87.1, 1375.0], [87.2, 1381.0], [87.3, 1392.0], [87.4, 1397.0], [87.5, 1420.0], [87.6, 1423.0], [87.7, 1428.0], [87.8, 1434.0], [87.9, 1440.0], [88.0, 1451.0], [88.1, 1460.0], [88.2, 1476.0], [88.3, 1485.0], [88.4, 1504.0], [88.5, 1517.0], [88.6, 1524.0], [88.7, 1546.0], [88.8, 1550.0], [88.9, 1565.0], [89.0, 1581.0], [89.1, 1590.0], [89.2, 1607.0], [89.3, 1614.0], [89.4, 1619.0], [89.5, 1629.0], [89.6, 1632.0], [89.7, 1652.0], [89.8, 1673.0], [89.9, 1682.0], [90.0, 1719.0], [90.1, 1723.0], [90.2, 1744.0], [90.3, 1767.0], [90.4, 1778.0], [90.5, 1791.0], [90.6, 1797.0], [90.7, 1829.0], [90.8, 1840.0], [90.9, 1854.0], [91.0, 1870.0], [91.1, 1879.0], [91.2, 1897.0], [91.3, 1926.0], [91.4, 1950.0], [91.5, 1954.0], [91.6, 1967.0], [91.7, 1979.0], [91.8, 2012.0], [91.9, 2027.0], [92.0, 2048.0], [92.1, 2075.0], [92.2, 2130.0], [92.3, 2150.0], [92.4, 2163.0], [92.5, 2168.0], [92.6, 2209.0], [92.7, 2230.0], [92.8, 2238.0], [92.9, 2256.0], [93.0, 2282.0], [93.1, 2296.0], [93.2, 2322.0], [93.3, 2337.0], [93.4, 2350.0], [93.5, 2370.0], [93.6, 2426.0], [93.7, 2443.0], [93.8, 2495.0], [93.9, 2550.0], [94.0, 2568.0], [94.1, 2614.0], [94.2, 2685.0], [94.3, 2698.0], [94.4, 2755.0], [94.5, 2775.0], [94.6, 2795.0], [94.7, 2806.0], [94.8, 2886.0], [94.9, 2908.0], [95.0, 2954.0], [95.1, 2986.0], [95.2, 3030.0], [95.3, 3074.0], [95.4, 3103.0], [95.5, 3122.0], [95.6, 3171.0], [95.7, 3224.0], [95.8, 3255.0], [95.9, 3325.0], [96.0, 3413.0], [96.1, 3436.0], [96.2, 3504.0], [96.3, 3539.0], [96.4, 3605.0], [96.5, 3677.0], [96.6, 3829.0], [96.7, 3898.0], [96.8, 3980.0], [96.9, 4058.0], [97.0, 4173.0], [97.1, 4218.0], [97.2, 4234.0], [97.3, 4286.0], [97.4, 4456.0], [97.5, 4578.0], [97.6, 4659.0], [97.7, 4938.0], [97.8, 5028.0], [97.9, 5275.0], [98.0, 5402.0], [98.1, 5532.0], [98.2, 5599.0], [98.3, 5721.0], [98.4, 5801.0], [98.5, 5924.0], [98.6, 6023.0], [98.7, 6160.0], [98.8, 6278.0], [98.9, 6645.0], [99.0, 6887.0], [99.1, 7150.0], [99.2, 8081.0], [99.3, 9199.0], [99.4, 10055.0], [99.5, 11407.0], [99.6, 12244.0], [99.7, 12613.0], [99.8, 13305.0], [99.9, 14851.0], [100.0, 37847.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 640.0, "series": [{"data": [[0.0, 7.0], [600.0, 559.0], [700.0, 274.0], [800.0, 171.0], [900.0, 96.0], [1000.0, 76.0], [1100.0, 62.0], [1200.0, 58.0], [1300.0, 43.0], [1400.0, 29.0], [1500.0, 25.0], [1600.0, 23.0], [1700.0, 21.0], [1800.0, 18.0], [1900.0, 16.0], [2000.0, 13.0], [2100.0, 13.0], [2200.0, 16.0], [2300.0, 13.0], [2400.0, 9.0], [2500.0, 7.0], [2600.0, 8.0], [2800.0, 8.0], [2700.0, 9.0], [2900.0, 7.0], [3000.0, 9.0], [3100.0, 8.0], [3200.0, 7.0], [3300.0, 3.0], [3400.0, 6.0], [3500.0, 6.0], [3600.0, 4.0], [3700.0, 2.0], [3800.0, 4.0], [3900.0, 3.0], [4000.0, 4.0], [4100.0, 5.0], [4300.0, 2.0], [4200.0, 7.0], [4600.0, 2.0], [4500.0, 5.0], [4400.0, 1.0], [4800.0, 1.0], [5000.0, 1.0], [4900.0, 3.0], [5100.0, 1.0], [5200.0, 2.0], [5300.0, 2.0], [5600.0, 1.0], [5400.0, 3.0], [5500.0, 4.0], [5700.0, 4.0], [5800.0, 3.0], [6100.0, 2.0], [6000.0, 3.0], [5900.0, 4.0], [6200.0, 2.0], [6600.0, 2.0], [6400.0, 2.0], [6700.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7400.0, 1.0], [8100.0, 1.0], [8000.0, 2.0], [8200.0, 1.0], [9100.0, 1.0], [9700.0, 1.0], [9300.0, 1.0], [10000.0, 1.0], [11400.0, 1.0], [11300.0, 2.0], [11700.0, 2.0], [12200.0, 1.0], [12300.0, 2.0], [12600.0, 1.0], [12900.0, 1.0], [13300.0, 1.0], [12800.0, 1.0], [13500.0, 1.0], [13900.0, 1.0], [14800.0, 2.0], [17900.0, 1.0], [100.0, 63.0], [37800.0, 1.0], [200.0, 104.0], [300.0, 194.0], [400.0, 331.0], [500.0, 640.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 37800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 356.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2002.0, "series": [{"data": [[0.0, 705.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2002.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 356.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.6153846153846154, "minX": 1.55612418E12, "maxY": 5.0, "series": [{"data": [[1.55612466E12, 5.0], [1.55612436E12, 5.0], [1.55612454E12, 5.0], [1.55612448E12, 5.0], [1.55612484E12, 4.37974683544304], [1.55612418E12, 1.6153846153846154], [1.55612472E12, 5.0], [1.5561243E12, 5.0], [1.55612478E12, 5.0], [1.55612424E12, 4.871313672922252], [1.5561246E12, 5.0], [1.55612442E12, 5.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612484E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 486.26470588235287, "minX": 1.0, "maxY": 1009.9192734611505, "series": [{"data": [[1.0, 825.9090909090909], [2.0, 566.6470588235294], [4.0, 486.26470588235287], [5.0, 1009.9192734611505], [3.0, 518.7499999999999]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}, {"data": [[4.93960169768201, 996.4955925563165]], "isOverall": false, "label": "BeanShell Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.55612418E12, "maxY": 187692.9, "series": [{"data": [[1.55612466E12, 65356.78333333333], [1.55612436E12, 187692.9], [1.55612454E12, 114140.3], [1.55612448E12, 50099.75], [1.55612484E12, 43367.05], [1.55612418E12, 14273.566666666668], [1.55612472E12, 154845.5], [1.5561243E12, 184595.46666666667], [1.55612478E12, 99908.9], [1.55612424E12, 187614.66666666666], [1.5561246E12, 172939.98333333334], [1.55612442E12, 180794.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55612466E12, 0.0], [1.55612436E12, 0.0], [1.55612454E12, 0.0], [1.55612448E12, 0.0], [1.55612484E12, 0.0], [1.55612418E12, 0.0], [1.55612472E12, 0.0], [1.5561243E12, 0.0], [1.55612478E12, 0.0], [1.55612424E12, 0.0], [1.5561246E12, 0.0], [1.55612442E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612484E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 217.07692307692304, "minX": 1.55612418E12, "maxY": 2439.714285714286, "series": [{"data": [[1.55612466E12, 2439.714285714286], [1.55612436E12, 695.3874709976798], [1.55612454E12, 1217.4885496183208], [1.55612448E12, 2387.9652173913046], [1.55612484E12, 797.1265822784808], [1.55612418E12, 217.07692307692304], [1.55612472E12, 1135.4468085106387], [1.5561243E12, 712.9622641509426], [1.55612478E12, 1639.0659340659338], [1.55612424E12, 771.1581769436998], [1.5561246E12, 823.7380281690139], [1.55612442E12, 720.8240963855416]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612484E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.55612418E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612466E12, 0.0], [1.55612436E12, 0.0], [1.55612454E12, 0.0], [1.55612448E12, 0.0], [1.55612484E12, 0.0], [1.55612418E12, 0.0], [1.55612472E12, 0.0], [1.5561243E12, 0.0], [1.55612478E12, 0.0], [1.55612424E12, 0.0], [1.5561246E12, 0.0], [1.55612442E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612484E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.55612418E12, "maxY": 4.9E-324, "series": [{"data": [[1.55612466E12, 0.0], [1.55612436E12, 0.0], [1.55612454E12, 0.0], [1.55612448E12, 0.0], [1.55612484E12, 0.0], [1.55612418E12, 0.0], [1.55612472E12, 0.0], [1.5561243E12, 0.0], [1.55612478E12, 0.0], [1.55612424E12, 0.0], [1.5561246E12, 0.0], [1.55612442E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612484E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 61.0, "minX": 1.55612418E12, "maxY": 37847.0, "series": [{"data": [[1.55612466E12, 14859.0], [1.55612436E12, 3183.0], [1.55612454E12, 37847.0], [1.55612448E12, 12967.0], [1.55612484E12, 7150.0], [1.55612418E12, 405.0], [1.55612472E12, 17910.0], [1.5561243E12, 6056.0], [1.55612478E12, 14851.0], [1.55612424E12, 6160.0], [1.5561246E12, 13532.0], [1.55612442E12, 4659.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55612466E12, 147.0], [1.55612436E12, 92.0], [1.55612454E12, 87.0], [1.55612448E12, 412.0], [1.55612484E12, 61.0], [1.55612418E12, 134.0], [1.55612472E12, 128.0], [1.5561243E12, 142.0], [1.55612478E12, 96.0], [1.55612424E12, 106.0], [1.5561246E12, 84.0], [1.55612442E12, 166.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55612466E12, 1506.900000000001], [1.55612436E12, 1032.5], [1.55612454E12, 1319.7999999999997], [1.55612448E12, 1254.0], [1.55612484E12, 1719.0], [1.55612418E12, 284.6], [1.55612472E12, 1608.4000000000005], [1.5561243E12, 1057.2000000000003], [1.55612478E12, 1737.5], [1.55612424E12, 1159.0], [1.5561246E12, 1312.6000000000004], [1.55612442E12, 1040.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55612466E12, 6037.729999999997], [1.55612436E12, 3099.2000000000025], [1.55612454E12, 4863.96999999999], [1.55612448E12, 4382.050000000008], [1.55612484E12, 6915.80000000001], [1.55612418E12, 405.0], [1.55612472E12, 6178.429999999997], [1.5561243E12, 3275.5199999999995], [1.55612478E12, 6899.000000000007], [1.55612424E12, 3929.0], [1.5561246E12, 4826.980000000003], [1.55612442E12, 3125.7999999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55612466E12, 2735.399999999998], [1.55612436E12, 1291.0], [1.55612454E12, 2357.1499999999987], [1.55612448E12, 2227.75], [1.55612484E12, 2969.199999999995], [1.55612418E12, 363.3499999999998], [1.55612472E12, 2802.649999999999], [1.5561243E12, 1331.8], [1.55612478E12, 2979.75], [1.55612424E12, 1897.0], [1.5561246E12, 2340.8], [1.55612442E12, 1315.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612484E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 617.0, "minX": 1000.0, "maxY": 3104.0, "series": [{"data": [[1000.0, 617.0], [2000.0, 3104.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 4.9E-324, "series": [{"data": [[1000.0, 0.0], [2000.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.55612418E12, "maxY": 7.183333333333334, "series": [{"data": [[1.55612466E12, 1.9833333333333334], [1.55612436E12, 7.183333333333334], [1.55612454E12, 4.366666666666666], [1.55612448E12, 1.9166666666666667], [1.55612484E12, 1.2333333333333334], [1.55612418E12, 0.4666666666666667], [1.55612472E12, 4.7], [1.5561243E12, 7.066666666666666], [1.55612478E12, 3.033333333333333], [1.55612424E12, 6.266666666666667], [1.5561246E12, 5.916666666666667], [1.55612442E12, 6.916666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612484E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.55612418E12, "maxY": 7.183333333333334, "series": [{"data": [[1.55612466E12, 1.9833333333333334], [1.55612436E12, 7.183333333333334], [1.55612454E12, 4.366666666666666], [1.55612448E12, 1.9166666666666667], [1.55612484E12, 1.3166666666666667], [1.55612418E12, 0.43333333333333335], [1.55612472E12, 4.7], [1.5561243E12, 7.066666666666666], [1.55612478E12, 3.033333333333333], [1.55612424E12, 6.216666666666667], [1.5561246E12, 5.916666666666667], [1.55612442E12, 6.916666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55612484E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.55612418E12, "maxY": 7.183333333333334, "series": [{"data": [[1.55612466E12, 1.9833333333333334], [1.55612436E12, 7.183333333333334], [1.55612454E12, 4.366666666666666], [1.55612448E12, 1.9166666666666667], [1.55612484E12, 1.3166666666666667], [1.55612418E12, 0.43333333333333335], [1.55612472E12, 4.7], [1.5561243E12, 7.066666666666666], [1.55612478E12, 3.033333333333333], [1.55612424E12, 6.216666666666667], [1.5561246E12, 5.916666666666667], [1.55612442E12, 6.916666666666667]], "isOverall": false, "label": "BeanShell Sampler-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612484E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.55612418E12, "maxY": 7.183333333333334, "series": [{"data": [[1.55612466E12, 1.9833333333333334], [1.55612436E12, 7.183333333333334], [1.55612454E12, 4.366666666666666], [1.55612448E12, 1.9166666666666667], [1.55612484E12, 1.3166666666666667], [1.55612418E12, 0.43333333333333335], [1.55612472E12, 4.7], [1.5561243E12, 7.066666666666666], [1.55612478E12, 3.033333333333333], [1.55612424E12, 6.216666666666667], [1.5561246E12, 5.916666666666667], [1.55612442E12, 6.916666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55612484E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

