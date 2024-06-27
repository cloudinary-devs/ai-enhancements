import './App.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
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

  // Instantiate Cloudinary Images for each version of the image
  const origWedding = cld.image('docs/small-wedding-couple');
  const restoredWedding = cld.image('docs/small-wedding-couple');
  const superUpscaledWedding = cld.image('docs/small-wedding-couple'); 
  const enhancedWedding = cld.image('docs/small-wedding-couple');
  const improvedWedding = cld.image('docs/small-wedding-couple');
  const restoredSuperUpscaledEnhancedImprovedWedding = cld.image('docs/small-wedding-couple'); 
  
  const origTheatreView = cld.image('docs/small-theatre-view');
  const restoredSuperUpscaledEnhancedImprovedTheatreView = cld.image('docs/small-theatre-view'); 

  const origLivingRoom = cld.image('docs/small-living-room');
  const restoredSuperUpscaledEnhancedImprovedLivingRoom = cld.image('docs/small-living-room');

  //origWedding.effect(generativeRestore());
  
  // Restored
  restoredWedding.effect(generativeRestore());

  // Enhanced
  enhancedWedding.effect(enhance());

  // Improved
  improvedWedding.adjust(improve());

  // Upscaled with super resolution
  superUpscaledWedding.effect(upscale());

  // Restored, upscaled with super resolution, enhanced and improved
  restoredSuperUpscaledEnhancedImprovedWedding
    .effect(generativeRestore())
    .effect(upscale())
    .effect(enhance())
    .adjust(improve());

  // Restored, upscaled with super resolution, enhanced and improved
  restoredSuperUpscaledEnhancedImprovedTheatreView
    .effect(generativeRestore())
    .effect(upscale())
    .effect(enhance())
    .adjust(improve());

  // Restored, upscaled with super resolution, enhanced and improved
  restoredSuperUpscaledEnhancedImprovedLivingRoom
    .effect(generativeRestore())
    .effect(upscale())
    .effect(enhance())
    .adjust(improve());

  return (
    <>
    {/*
    <AdvancedImage cldImg={origWedding}></AdvancedImage>
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

    <h1>Original vs Restored</h1>
    <div className="container400">
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
    <div className="container400">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={enhancedWedding.toURL()} alt="Image two" />}
    />
    </div>
    <br/>

    <h1>Original vs Improved</h1>
    <div className="container400">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={improvedWedding.toURL()} alt="Image two" />}
    />
    </div>
    <br/>

    <h1>Original vs Restored, Upscaled, Enhanced and Improved</h1>
    <div className="container400">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={origWedding.toURL()} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={restoredSuperUpscaledEnhancedImprovedWedding.toURL()} alt="Image two" />}
    />
    </div>
 
    </>
  )
}

export default App
