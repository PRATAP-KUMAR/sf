import { Link, useMatch, useResolvedPath } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const CustomLink = (props) => {
    const obj = props;
    let { routeName, routeTo } = obj;
    const isActive = useMatch({
        path: useResolvedPath(routeTo).pathname,
        end: true,
    });

    return (
        <Link
            to={routeTo}
            className={classNames(
                isActive
                    ? "text-color-3"
                    : "text-white"
                ,
                "px-2 py-1 font-custom text-bold text-m-6 hover:text-color-2",
            )}
        >
            {routeName}
        </Link >
    );
};

export default CustomLink

