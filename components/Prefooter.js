export default function Prefooter() {
  return (
    <section className="prefooter">
      <div className="onecoolthing">
        <h3 className="onecoolthing__header">Cool <a href="https://github.com/containrrr/watchtower" className="util-highlight">Tech</a> Thing</h3>
        <p className="onecoolthing__body"><a href="https://github.com/containrrr/watchtower">Watchtower</a> has me excited for a Heroku for Docker. This is a big deal if you know <a href="https://sparkbox.com/foundry/successful_software_build_and_deployment_pipelines">how I feel about deploy pipelines</a>.</p>
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
