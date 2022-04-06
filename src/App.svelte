<script>
  import {MDBRow, MDBCol} from "mdbsvelte";
  import Doughnut from "svelte-chartjs/src/Doughnut.svelte"

  async function getRekidai() {
    const res = await fetch(`rekidai.json`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'same-origin', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    });
    const json = await res.json();

    if (res.ok) {
      return json;
    } else {
      throw new Error(text);
    }
  }

  let promise = getRekidai();
  let topRankers = {};
  let topRankersSort = [];
  let topRankersLabels = [];
  let topRankersCounts = [];
  let doughnutData = {
    labels: topRankersLabels,
    datasets: [{
      data: topRankersCounts,
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#F30EC1", "#0DDB96", "#3E19C5", "#61FA09", "#0F93C7", "#FCF810"],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
        "#E00EF3",
        "#0DDB5C",
        "#1925C5",
        "#9EFA09",
        "#0FB1C7",
        "#FCD110"
      ]
    }]
  };
  let chartOptions = {
    responsive: true,
    plugins: {
      colorschemes: {
        scheme: 'office.Forte6'
      }
    }
  };

  promise.then(list => {
    list.reduce((prev, cur) => {
      if (topRankers[cur.player] == null) {
        topRankers[cur.player] = 1;
      } else {
        ++topRankers[cur.player];
      }

      return topRankers;
    }, {});

    Object.keys(topRankers).forEach(e => {
      topRankersSort.push({ player: e, counts: topRankers[e] });
    });
    topRankersSort.sort((lhs, rhs) => {
      if (lhs.counts == rhs.counts) {
        if (lhs.player == rhs.player) {
          return 0;
        }
        if (lhs.player < rhs.player) {
          return -1;
        } else {
          return +1;
        }
      } else if (lhs.counts < rhs.counts) {
        return +1;
      } else {
        return -1;
      }
    });
    topRankersSort.forEach((e, i) => {
      topRankersLabels.push(e.player);
      topRankersCounts.push(e.counts);

      if (i <= 0) {
        topRankersSort[i].rank = 1;
      } else {
        if (topRankersSort[i - 1].counts == topRankersSort[i].counts) {
          topRankersSort[i].rank = topRankersSort[i - 1].rank;
        } else {
          topRankersSort[i].rank = topRankersSort[i - 1].rank + 1;
        }
      }
    });
  });

  function calcRate(notes, score) {
    const MAX = notes * 2;

    if (score >= MAX) {
      return '100%';
    }

    return Number(score / MAX * 100).toFixed(2) + '%';
  }

  function calcRecord(notes, score) {
    const MAX = notes * 2;

    if (score >= MAX) {
      return 'MAX';
    }

    const maxMinus = Math.ceil(MAX * 17 / 18);
    const aaaPlus = Math.ceil(MAX * 8 / 9);
    const aaaMinus = Math.ceil(MAX * 15 / 18);
    const aaPlus = Math.ceil(MAX * 7 / 9);
    const aaMinus = Math.ceil(MAX * 13 / 18);
    const aPlus = Math.ceil(MAX * 6 / 9);
    const aMinus = Math.ceil(MAX * 11 / 18);
    const bPlus = Math.ceil(MAX * 5 / 9);
    const bMinus = Math.ceil(MAX * 9 / 18);
    const cPlus = Math.ceil(MAX * 4 / 9);
    const cMinus = Math.ceil(MAX * 7 / 18);
    const dPlus = Math.ceil(MAX * 3 / 9);
    const dMinus = Math.ceil(MAX * 5 / 18);
    const ePlus = Math.ceil(MAX * 2 / 9);
    const eMinus = Math.ceil(MAX * 3 / 18);

    if (score >= maxMinus) {
      return 'MAX-' + (MAX - score);
    } else if (score >= aaaPlus) {
      return 'AAA+' + (score - aaaPlus)
    } else if (score >= aaaMinus) {
      return 'AAA-' + (aaaPlus - score);
    } else if (score >= aaPlus) {
      return 'AA+' + (score - aaPlus);
    } else if (score >= aaMinus) {
      return 'AA-' + (aaPlus - score);
    } else if (score >= aPlus) {
      return 'A+' + (score - aPlus);
    } else if (score >= aMinus) {
      return 'A-' + (aPlus - score);
    } else if (score >= bPlus) {
      return 'B+' + (score - bPlus);
    } else if (score >= bMinus) {
      return 'B-' + (bPlus - score);
    } else if (score >= cPlus) {
      return 'C+' + (score - cPlus);
    } else if (score >= cMinus) {
      return 'C-' + (cPlus - score);
    } else if (score >= dPlus) {
      return 'D+' + (score - dPlus);
    } else if (score >= dMinus) {
      return 'D-' + (dPlus - score);
    } else if (score >= ePlus) {
      return 'E+' + (score - ePlus);
    } else if (score >= eMinus) {
      return 'E-' + (ePlus - score);
    } else {
      return 'F';
    }
  }
</script>

<svelte:head>
  <html lang="ja" />
  <title>IIDX SP ☆12 歴代</title>
  <meta name="keywords" content="歷代,rekidai">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FLKW9GYQ6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7FLKW9GYQ6');
  </script>
</svelte:head>

<main>
  {#await promise}
    <p>Loading...</p>
  {:then list}
    <p><b>Anyone can edit the following rekidai data.</b><br>If you want to update rekidai data, please fork <a href="https://github.com/rekidai-info/rekidai-info.github.io" target="_blank" rel="noopener noreferrer">https://github.com/rekidai-info/rekidai-info.github.io</a>, edit <a href="https://github.com/rekidai-info/rekidai-info.github.io/blob/main/rekidai.json" target="_blank" rel="noopener noreferrer">rekidai.json</a>, and submit a Pull Request.<br>Don't have a GitHub account? Please submit a request form for <a href="https://forms.gle/wqrRh1ow6uaREy286" target="_blank" rel="noopener noreferrer">Rekidai Score Update Request</a> or a <a href="https://forms.gle/SDkmfUcTC5zLsGPD6" target="_blank" rel="noopener noreferrer">New Music Addition Request</a>.</p>

    <hr>

    <script src="table-sort.js"></script>
    <table class="table-sort table-arrows">
      <thead>
        <tr>
          <th>Music</th>
          <th>Player</th>
          <th>Score</th>
          <th>Record</th>
          <th>Rate</th>
          <th>Notes</th>
          <th>BPM</th>
          <th>Top Ver</th>
          <th>Version</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each list as rekidai}
          <tr>
            {#if rekidai.scoreResult == null}
              <td>{rekidai.music}</td>
            {:else}
              <td><a href="{rekidai.scoreResult}" target="_blank" rel="noopener noreferrer">{rekidai.music}</a></td>
            {/if}
            <td>{rekidai.player}</td>
            <td style="text-align: center;">{rekidai.score}</td>
            <td style="text-align: center;">{calcRecord(rekidai.notes, rekidai.score)}</td>
            <td style="text-align: center;">{calcRate(rekidai.notes, rekidai.score)}</td>
            {#if rekidai.textage == null}
              <td style="text-align: center;">{rekidai.notes}</td>
            {:else}
              <td style="text-align: center;"><a href="{rekidai.textage}" target="_blank" rel="noopener noreferrer">{rekidai.notes}</a></td>
            {/if}
            {#if rekidai.musicMovie == null}
              <td style="text-align: center;">{rekidai.bpm.join('~')}</td>
            {:else}
              <td style="text-align: center;"><a href="{rekidai.musicMovie}" target="_blank" rel="noopener noreferrer">{rekidai.bpm.join('~')}</a></td>
            {/if}
            <td>{rekidai.topVersion}</td>
            <td>{rekidai.version}</td>
            <td style="text-align: center;">{rekidai.date}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <hr>

    <table class="table-sort table-arrows">
      <thead>
        <th>Rank</th>
        <th>Player</th>
        <th>Count</th>
      </thead>
      <tbody>
        {#each topRankersSort as topRanker}
          <tr>
            <td>{topRanker.rank}</td>
            <td>{topRanker.player}</td>
            <td>{topRanker.counts}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <hr>

    <MDBRow>
      <MDBCol md="8" class="mx-auto">
        <Doughnut data={doughnutData} options={chartOptions} />
      </MDBCol>
    </MDBRow>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>

<style>
</style>
