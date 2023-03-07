// 혜린: 제가 전역으로 사용할 mixin들을 여기에 생성해놨습니다. conflict 발생하면 참고해주세요!
export const flex = ({
  direction = "row",
  justify = "center",
  align = "center",
}) => `
	  display : flex;
    flex-direction : ${direction};
	  justify-content : ${justify}; 
	  align-items : ${align}; 
 	 `;
