<template>
  <div class="container">
    <div>
      <div>Details</div>
      <div>Collapse ></div>
    </div>
    <div>
      <Card>
        <div class="title">Progress</div>
        <div class="chart">
          <div class="outer">
            <div class="inner">
              59%
            </div>
          </div>
        </div>
        <div class="price">$13,620</div>
        <div class="note">Earned Value</div>
      </Card>
      <Card>
        <div class="icon">Paper</div>
      </Card>
      <Card>
        <div class="icon">Message
        </div>
      </Card>
    </div>
    <div>
      <div class="title">8 actions today</div>
      <div class="timeline">
        <div class="bubble">16:40</div>
      </div>
      <div class="entries">
        <div class="entry">
          <div class="title">Judith Henry</div>
          <div class="subtitle">Paused "PR Strategies planning"</div>
        </div>
      </div>
    </div>
    <Card>
      <div class="left">
        <div class="title">Meeting | Today, 17:30</div>
        <div class="subtitle">Website Discussion</div>
      </div>
      <div class="right">
        <div class="icon">Zoom</div>
      </div>
      <div class="buttons">
        <div class="success">Accept</div>
        <div class="outline">Reject</div>
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from "./Card";
export default {
  name: "RightContextMenu",
  components: {
    Card
  }
};
</script>

<style scoped>
.container {
  background: #e4f2ff;
}
</style>
