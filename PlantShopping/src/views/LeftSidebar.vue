<template>
  <div class="col-md-3 col-lg-2 p-0 border-end left-sidebar">
    <div class="border-bottom px-4 py-2">
      <span class="left-sidebar-header">filter</span>
    </div>
    <div class="border-bottom p-4">
      <span class="left-sidebar-header">categories</span>
      <div class="mt-2">
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Gardening
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Plants
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault1"
            />
            <label class="form-check-label" for="flexCheckDefault1">
              Seeds
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked2"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked2">
              Bulbs
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label class="form-check-label" for="flexCheckDefault3">
              Planters
            </label>
          </div>
        </div>
        <div class="d-flex align-items-center ms-4">
          <span>others</span>
          <span class="d-flex mt-1 ms-2"
            ><i class="bi bi-chevron-down"></i
          ></span>
        </div>
      </div>
    </div>
    <div class="border-bottom p-4">
      <span class="left-sidebar-header">Price range</span>
      <div class="mt-2 d-flex mb-3">
        <div class="w-50 me-3 disable-btn">min</div>
        <div class="w-50 btn secoudary-btn">$400</div>
      </div>
      <div>
        <button class="btn primary-btn" type="button">set price</button>
      </div>
    </div>
    <div class="border-bottom p-4">
      <span class="left-sidebar-header">Rating</span>
      <div class="d-flex align-items-center">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
        <div class="d-flex">
          <span class="ms-1"><i class="bi bi-star-fill"></i></span>
          <span class="ms-1"><i class="bi bi-star-fill"></i></span>
          <span class="ms-1"><i class="bi bi-star-fill"></i></span>
          <span class="ms-1"><i class="bi bi-star-half"></i></span>
          <span class="ms-1"><i class="bi bi-star"></i></span>
        </div>
        <div class="ms-2">above</div>
      </div>
    </div>
    <div class="p-4">
      <div class="discount-card d-flex flex-column">
        <span class="title">Get 30% off</span>
        <span class="sub-title my-2">
          Share your reffral code and get discount!
        </span>
        <button class="btn primary-btn yellow-btn" type="button">share</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
