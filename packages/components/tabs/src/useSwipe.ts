import { Ref, onMounted, onBeforeUnmount } from "vue"; // 添加导入

export function useSwipe(container: Ref<HTMLElement | null>) {
    let startX: number;
    let isDragging = false;

    const handleMouseDown = (e: MouseEvent) => {
        if (!container.value) return;
        startX = e.clientX;
        isDragging = true;
        container.value.style.cursor = "grabbing";
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !container.value) return;
        const dx = e.clientX - startX;
        container.value.scrollLeft -= dx;
        startX = e.clientX;
    };

    const handleMouseUp = () => {
        isDragging = false;
        if (container.value) {
            container.value.style.cursor = "";
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    onMounted(() => {
        if (container.value) {
            container.value.addEventListener("mousedown", handleMouseDown);
        }
    });

    onBeforeUnmount(() => {
        if (container.value) {
            container.value.removeEventListener("mousedown", handleMouseDown);
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    });
}
