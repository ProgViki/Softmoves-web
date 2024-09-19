import { Link } from 'react-router-dom';

function SubMenu(props: any) {
  return (
    <div
      className={`${props.extraStyle} text-[#0A96CC] hover:border-[#0A96CC] ${props.isSelected ? '' : ''}`}
    >
      <div onClick={props.onSelect}>
        <Link to={props.href}>
          <div
            className={`flex pl-[8px] border-l-4 border-transparent hover:border-[#007D53] hover:bg-[#007D5314]  justify-between items-center py-[8px] font-semibold text-[13px] ${
              props.isSelected ? 'hover:none text-white rounded-md bg-[#007D53]' : ''
            }`}
          >
            <div className="flex gap-[16px]">
              {props.isSelected ? <img src={props.hoverImg} className="" alt="" /> : <img src={props.img} className="" alt="" /> }
              <span className={`text-[14px] font-semibold ${props.isSelected ? " text-white " : "text-[#777777] "}`}>{props.children}</span>
            </div>
            <div>
              <img src={props.drop} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SubMenu;
