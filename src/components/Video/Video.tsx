export function Video() {
  return (
    <section className="video container">
      <video
        className="video__video"
        src="/video/video-lions.mp4"
        preload="auto"
        playsInline
        muted
        autoPlay
        loop
        controls
      >
        <track
          src="/subtitles/video-lions.vtt"
          kind="subtitles"
          srcLang="ru"
          label="Russian"
        />
      </video>
    </section>
  );
}
