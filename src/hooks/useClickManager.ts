import { useEffect, type RefObject } from "react";

export default function useClickManager(exitHandle: () => void, containerRef: RefObject<any>) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                exitHandle()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [containerRef]);
}