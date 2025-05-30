import React from "react";

const Slider = ({ imagen, titulo}) => {
  return (
<div
  data-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "carousel-box carousel-active:bg-primary"
  }' class="relative w-full" >
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
<img src={imagen} alt={titulo} className="w-full h-52 object-cover" />
        </div>
      </div>
      <div class="carousel-slide active">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
<img src={imagen} alt={titulo} className="w-full h-52 object-cover" />
        </div>
      </div>
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
<img src={imagen} alt={titulo} className="w-full h-52 object-cover" />
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[tabler--chevron-left] size-5"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button type="button" class="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
    <span class="icon-[tabler--chevron-right] size-5"></span>
    <span class="sr-only">Next</span>
  </button>

  <div class="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
</div>
  );
};

export default Slider;
