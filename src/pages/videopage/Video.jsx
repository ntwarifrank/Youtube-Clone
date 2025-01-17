import { useParams } from "react-router-dom";
import Playvideo from "../../components/playvideo/playvideo";
import './video.css'

const Video = () => {

const { channelid, categoryid, videoid } = useParams();

  return (
    <div className="video-container">
      <Playvideo categoryid={categoryid} videoid={videoid} channelid={channelid} />
    </div>
  );
}

export default Video
