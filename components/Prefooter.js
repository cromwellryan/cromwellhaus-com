export default function Prefooter() {
  return (
    <section className="prefooter">
      <div className="onecoolthing">
        <h3 className="onecoolthing__header">Cool <span className="util-highlight">Tech</span> Thing</h3>
        <p className="onecoolthing__body">Way to get to the bottom. If you leave here with nothing else, check out this one cool thing.</p>
      </div>

      <div className="onecoolthing">
        <h3 className="onecoolthing__header">Latest <a className="util-highlight" href="https://twitter.com/cromwellryan">Tweet</a></h3>
        <p className="onecoolthing__body">
          <a className="twitter-timeline" href="https://twitter.com/cromwellryan" data-height="200" data-widget-id="368846062565347328" data-chrome="noheader nofooter noborders noscrollbar transparent" data-tweet-limit="1">Tweets by @cromwellryan</a>
        </p>

        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </section>
  )
}
