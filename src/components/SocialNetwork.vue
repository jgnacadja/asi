<template>
  <ul class="has-text-centered is-size-4	p-2">
    <li >
      <ShareNetwork
          network="LinkedIn"
          :url="url"
          :title="data._source.name"
          :description="data._source.goal"
          :hashtags="data._source.market">
          <span class="icon">
          <i class="fab fa-linkedin" title="Partager sur LinkedIn"></i>
        </span>
      </ShareNetwork>
    </li>
    <li>
      <ShareNetwork
          network="facebook"
          :url="url"
          :title="data._source.name"
          :description="data._source.goal"
          :hashtags="data._source.market">
        <span class="icon">
          <i class="fab fa-facebook" title="Partager sur Facebook"></i>
        </span>
      </ShareNetwork>
    </li>
    <li>
      <ShareNetwork
          network="Twitter"
          :url="url"
          :title="data._source.name"
          :description="data._source.goal"
          :hashtags="data._source.market">
          <span class="icon">
          <i class="fab fa-twitter" title="Partager sur Twitter"></i>
        </span>
      </ShareNetwork>
    </li>
  </ul>
</template>