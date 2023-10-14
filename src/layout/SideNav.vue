<template>
  <div class="w-100 h-100">
    <ul class="list-unstyled">
      <li>
        <div>
          <button
            class="btn btn-primary w-100 btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            Master Data
          </button>
          <div class="collapse show" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal bg-secondary pb-1 small">
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
