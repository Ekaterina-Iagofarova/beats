const accWidth = item =>{

  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".colors");
  const titleBlocks = container.find(".colors__title");
  const titleWidth = titleBlocks.width() * titleBlocks.length;

  const textContainer =  item.find(".colors__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));
  const mobile = window.matchMedia("(max-width: 768px)").matches;

  if (mobile){
    reqItemWidth = screenWidth - titleWidth;
  }

  else{
    reqItemWidth = 500;
  }
    
  return{
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingRight - paddingLeft
  }
  
};


const closeItems = container =>{
  const items = container.find(".colors__item");
  const content = container.find(".colors__content");

  items.removeClass("colors__item_active");

  content.width(0);
};


const openItemA = item =>{

  const hiddenContent = item.find(".colors__content");
  const reqWidth = accWidth(item);
  const textBlock = item.find(".colors__container");

  item.addClass("colors__item_active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};


$(".colors__title").on("click", e =>{
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".colors__item");
  const itemOpen = item.hasClass("colors__item_active");
  const container = $this.closest(".colors");

  if (itemOpen){
    closeItems(container);
  }
  else{
    closeItems(container);
    openItemA(item);
  }
});


$(".colors__close").on("click", e => {
  e.preventDefault();

  closeItems($(".colors"));
});