import React, { useState } from 'react'
import "./ProductSpecs.css"


function ProductSpecs(){

      const [height, setHeight] = useState("220px");
      const [text, setText] = useState("View All");
       const handleClick = () => {
            height=== `220px` ? setHeight("auto"): setHeight(`220px`);
            text===`View All`? setText(`Close`): setText(`View All`)
      };
  return (
    <div className='product-specs-container'  style={{height:height}}>
        <button onClick={handleClick} className='product-specs-open-close-button'>{text}</button>
            <h2 className='product-spec-title'>Specifications</h2>

                {/*section 1*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>Physical Specs</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Weight</h2>
                        <h2 className='product-spec-value'>2.29 Kg</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Dimension</h2>
                        <h2 className='product-spec-value'>357.8 * 255 * 23.5</h2>
                         </div>
                    </div>
                    </div>


                        {/*section 2*/}
            <div className='product-spec-section-container'>
                     <h2 className='product-spec-section-title'>CPU</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>CPU Maker</h2>
                        <h2 className='product-spec-value'>Intel</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Processor Generation</h2>
                        <h2 className='product-spec-value'>13th Generation</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Processor Series</h2>
                        <h2 className='product-spec-value'>Core i5</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Processor Model</h2>
                        <h2 className='product-spec-value'>Core i5-13420H</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Processor Frequency</h2>
                        <h2 className='product-spec-value'>to 4.5 GHZ</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Cach Storage</h2>
                        <h2 className='product-spec-value'>12 MB</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Core Number</h2>
                        <h2 className='product-spec-value'>8 pcs</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>High-Concumation Cores</h2>
                        <h2 className='product-spec-value'>4 pcs</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>AI Npu</h2>
                        <h2 className='product-spec-value'>Doesn't Have</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Threads Number</h2>
                        <h2 className='product-spec-value'>12 Threads</h2>
                         </div>
                    </div>
                    </div>


                     {/*section 3*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>GPU</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>GPU Maker</h2>
                        <h2 className='product-spec-value'>Nvidia</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>GPU Model</h2>
                        <h2 className='product-spec-value'>RTX 4050</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Specific Graphical Storage</h2>
                        <h2 className='product-spec-value'>6 Gb</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>GPU Storage Type</h2>
                        <h2 className='product-spec-value'>GDDR6</h2>
                         </div>
                    </div>
                    </div>

             {/*section 4*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>Ram & Storage</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Ram Storage</h2>
                        <h2 className='product-spec-value'>16 Gb</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Ram Storage Type</h2>
                        <h2 className='product-spec-value'>DDR4</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Ram Ferequency</h2>
                        <h2 className='product-spec-value'>3200 MGHZ</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Other Ram Describtions</h2>
                        <h2 className='product-spec-value'>Upgratable</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Storage</h2>
                        <h2 className='product-spec-value'>512 Gb</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Storage Type</h2>
                        <h2 className='product-spec-value'>SSD</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Storage Specs</h2>
                        <h2 className='product-spec-value'>PCle NVMe / Upgratable</h2>
                         </div>
                    </div>
                    </div>

                     {/*section 5*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>Display</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Touch Display</h2>
                        <h2 className='product-spec-value'>Doesn't have</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Display Size</h2>
                        <h2 className='product-spec-value'>15.6 inch</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Display Panel</h2>
                        <h2 className='product-spec-value'>IPS Level Panel</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Display Accuaracy</h2>
                        <h2 className='product-spec-value'>1920 * 1080 | Full HD Pixels</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Refresh Rate</h2>
                        <h2 className='product-spec-value'>144 HZ</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Display Cover</h2>
                        <h2 className='product-spec-value'>Matt</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Aspect Ratio</h2>
                        <h2 className='product-spec-value'>16:9 - Standard</h2>
                         </div>
                          <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Brightness</h2>
                        <h2 className='product-spec-value'>Up to 300 Nits</h2>
                         </div>
                    </div>
                    </div>

                    {/*section 6*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>Battery</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Cells Number and Laptop Battery Storage</h2>
                        <h2 className='product-spec-value'>4 Cells With 70 Watt Hour Storage</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Battery Describtion</h2>
                        <h2 className='product-spec-value'>Supporting Fast Charge | 50% in 30 minutes</h2>
                         </div>
                    </div>
                    </div>

                     {/*section 7*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>Facilities</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>KeyBoard Backlite</h2>
                        <h2 className='product-spec-value'>MonoChrome</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Laptop Sensors</h2>
                        <h2 className='product-spec-value'>WebCam</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>KeyBoard and TouchPad Abilities</h2>
                        <h2 className='product-spec-value'>Numbers Key - None-Button Touch Pad</h2>
                         </div>
                           <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Speaker Specs</h2>
                        <h2 className='product-spec-value'>2 DTS:X Ultra Speakers with HP Audio Boost Technology</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Touch Pad Specs</h2>
                        <h2 className='product-spec-value'>Supports Multiple Touch</h2>
                         </div>
                    </div>
                    </div>

                     {/*section 8*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>Ports & Comunication Technologies</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Ports & Comunication Technologies</h2>
                        <h2 className='product-spec-value'> USB-Wifi - Memmory Card Slot - Rj-45 Lan - Bluetooth - USB Type-C - 3.5 mm Sound Jack - HDMI 2.1 - Display Port 1.4</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Ports Abilities</h2>
                        <h2 className='product-spec-value'>PD Charging Output - Display OutPut By USB</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Wifi Describtion</h2>
                        <h2 className='product-spec-value'>Wifi 6</h2>
                         </div>
                           <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Bluetooth Version</h2>
                        <h2 className='product-spec-value'>5.3</h2>
                         </div>
                    </div>
                    </div>

                     {/*section 9*/}
            <div className='product-spec-section-container'>
                    <h2 className='product-spec-section-title'>General Specifications</h2>
                    <div className='product-spec-section'>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Upgraded</h2>
                        <h2 className='product-spec-value'>No</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>Items With Laptop</h2>
                        <h2 className='product-spec-value'>Charger - Guide Booklet</h2>
                         </div>
                         <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>System</h2>
                        <h2 className='product-spec-value'>Windows 11</h2>
                         </div>
                           <div className='product-spec-div'>
                        <h2 className='product-spec-variable'>User</h2>
                        <h2 className='product-spec-value'>Gaming</h2>
                         </div>
                    </div>
                    </div>
            </div>
  )
}

export default ProductSpecs;