import './App.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { generativeRestore, enhance, upscale } from "@cloudinary/url-gen/actions/effect";
import { improve } from "@cloudinary/url-gen/actions/adjust";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function App() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const origWedding = cld.image('docs/small-wedding-couple');
  const enhancedWedding = cld.image('docs/small-wedding-couple');
  const improvedWedding = cld.image('docs/small-wedding-couple');
  const restoredWedding = cld.image('docs/small-wedding-couple');
  const restoredSuperUpscaledWedding = cld.image('docs/small-wedding-couple'); 
  const restoredUpscaledWedding = cld.image('docs/small-wedding-couple'); 
  const superUpscaledWedding = cld.image('docs/small-wedding-couple'); 
  const restoredSuperUpscaledEnhancedWedding = cld.image('docs/small-wedding-couple'); 
  const restoredSuperUpscaledEnhancedImprovedWedding = cld.image('docs/small-wedding-couple'); 
  const superUpscaledEnhancedImprovedWedding = cld.image('docs/small-wedding-couple'); 
  const restoredEnhancedImprovedWedding = cld.image('docs/small-wedding-couple'); 
  
  const origTheatreView = cld.image('docs/small-theatre-view');
  const restoredSuperUpscaledEnhancedImprovedTheatreView = cld.image('docs/small-theatre-view'); 

  const origLivingRoom = cld.image('docs/small-living-room');
  const restoredSuperUpscaledEnhancedImprovedLivingRoom = cld.image('docs/small-living-room');

  const origTim = cld.image('docs/wa_blurry_tim'); 
  const restoredTim = cld.image('docs/wa_blurry_tim'); 
  const restoredEnhancedTim = cld.image('docs/wa_blurry_tim');
  const restoredEnhancedImprovedTim = cld.image('docs/wa_blurry_tim');
 
  
  // Restored
  restoredWedding.effect(generativeRestore());

  // Enhanced
  enhancedWedding.effect(enhance());

  // Improved
  improvedWedding.adjust(improve());

  // Restored and upscaled with simple resize scale
  restoredUpscaledWedding.effect(generativeRestore()).resize(scale().width(1400));

  // Restored, enhanced and improved
  restoredEnhancedImprovedWedding.effect(generativeRestore()).effect(enhance()).adjust(improve());

  // Upscaled with super resolution
  superUpscaledWedding.effect(upscale());

  // Upscaled with super resolution, enhanced and improved
  superUpscaledEnhancedImprovedWedding.effect(upscale()).effect(enhance()).adjust(improve());

  // Restored and upscaled with super resolution
  restoredSuperUpscaledWedding.effect(generativeRestore()).effect(upscale());

  // Restored, upscaled with super resolution and enhanced
  restoredSuperUpscaledEnhancedWedding.effect(generativeRestore()).effect(upscale()).effect(enhance());

  // Restored, upscaled with super resolution, enhanced and improved
  restoredSuperUpscaledEnhancedImprovedWedding.effect(generativeRestore()).effect(upscale()).effect(enhance()).adjust(improve());

  // Just resized (downscaled)
//  origTim.resize(scale().width(800));

  // Resized and restored
//  restoredTim.resize(scale().width(800)).effect(generativeRestore());

  // Resized, restored and enhanced
//  restoredEnhancedTim.resize(scale().width(800)).effect(generativeRestore()).effect(enhance());
  
  // Resized, restored, enhanced and improved
//  restoredEnhancedImprovedTim.resize(scale().width(800)).effect(generativeRestore()).effect(enhance()).adjust(improve());

  // Restored, upscaled with super resolution, enhanced and improved
  restoredSuperUpscaledEnhancedImprovedTheatreView.effect(generativeRestore()).effect(upscale()).effect(enhance()).adjust(improve());

  restoredSuperUpscaledEnhancedImprovedLivingRoom.effect(generativeRestore()).effect(upscale()).effect(enhance()).adjust(improve());

  return (
    <>
{/*
    <AdvancedImage cldImg={restoredTim} width={400}></AdvancedImage>
    <br/>

    <AdvancedImage cldImg={origTim} width={400}></AdvancedImage>
    {' '}
    <AdvancedImage cldImg={restoredEnhancedTim} width={400}></AdvancedImage>
    {' '}
    <AdvancedImage cldImg={restoredEnhancedImprovedTim} width={400}></AdvancedImage>
    <br/>
*/}
    <AdvancedImage cldImg={origLivingRoom}></AdvancedImage>
    {' '} 
    <AdvancedImage cldImg={restoredSuperUpscaledEnhancedImprovedLivingRoom} width={400}></AdvancedImage>    

    <br/>
    <AdvancedImage cldImg={origTheatreView}></AdvancedImage>
    {' '} 
    <AdvancedImage cldImg={restoredSuperUpscaledEnhancedImprovedTheatreView} width={400}></AdvancedImage>    

    <br/>
    <AdvancedImage cldImg={origWedding}></AdvancedImage>
    {' '} 
    <AdvancedImage cldImg={restoredSuperUpscaledEnhancedImprovedWedding} width={400}></AdvancedImage>    
    <br/>
{/*
    <h1>Original vs Restored</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origTim.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredTim.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Restored vs Restored and Enhanced</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={restoredTim.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredEnhancedTim.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Restored and Enhanced vs Restored, Enhanced and Improved</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={restoredEnhancedTim.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredEnhancedImprovedTim.toURL()} alt="Image two" />}
    />
    </div>
*/}
    <h1>Original vs Restored</h1>
    <div className="container350">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredWedding.toURL()} alt="Image two" />}
    />
    </div>
    <br/>

    <h1>Original vs Upscaled</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={superUpscaledWedding.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Original vs Enhanced</h1>
    <div className="container350">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={enhancedWedding.toURL()} alt="Image two" />}
    />
    </div>
    <br/>

    <h1>Original vs Improved</h1>
    <div className="container350">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={improvedWedding.toURL()} alt="Image two" />}
    />
    </div>
    <br/>
{/*
    <h1>Original vs Upscaled, Enhanced and Improved</h1>
    <div className="container350">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={superUpscaledEnhancedImprovedWedding.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Original vs Restored, Enhanced and Improved</h1>
    <div className="container350">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredEnhancedImprovedWedding.toURL()} alt="Image two" />}
    />
    </div>
    <br/>
*/}

    <h1>Original vs Restored, Upscaled, Enhanced and Improved</h1>
    <div className="container350">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredSuperUpscaledEnhancedImprovedWedding.toURL()} alt="Image two" />}
    />
    </div>
  {/*
    <h1>Restored vs Upscaled</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={restoredUpscaledWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={superUpscaledWedding.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Upscaled vs Restored & Upscaled</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={superUpscaledWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredSuperUpscaledWedding.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Restored & Upscaled vs Restored, Upscaled and Enhanced</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={restoredSuperUpscaledWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredSuperUpscaledEnhancedWedding.toURL()} alt="Image two" />}
    />
    </div>

    <h1>Restored, Upscaled and Enhanced vs Restored, Upscaled, Enhanced and Improved</h1>
    <div className="container800">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={restoredSuperUpscaledEnhancedWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredSuperUpscaledEnhancedImprovedWedding.toURL()} alt="Image two" />}
    />
    </div>
*/}
    </>
  )
}

export default App
