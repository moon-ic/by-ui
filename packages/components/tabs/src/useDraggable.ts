// src/components/useDraggable.ts
import { Ref, onMounted, onBeforeUnmount } from "vue";

interface DraggableItem {
    id: string;
    [key: string]: any;
}

interface UseDraggableOptions {
    container: Ref<HTMLElement | null>;
    items: DraggableItem[];
    onChange: (newItems: DraggableItem[]) => void;
}

export function useDraggable(options: UseDraggableOptions) {
    let draggedItemIndex = -1;

    const handleDragStart = (index: number) => {
        draggedItemIndex = index;
    };

    const handleDragOver = (e: DragEvent, index: number) => {
        e.preventDefault(); // 必须阻止默认行为
        if (draggedItemIndex === index) return;

        const newItems = [...options.items];
        const [removed] = newItems.splice(draggedItemIndex, 1);
        newItems.splice(index, 0, removed);

        options.onChange(newItems);
        draggedItemIndex = index;
    };

    const setupDragEvents = () => {
        if (!options.container.value) return;

        const items = options.container.value.querySelectorAll(".draggable-item");

        items.forEach((item, index) => {
            item.setAttribute("draggable", "true");
            item.addEventListener("dragstart", () => handleDragStart(index));
            item.addEventListener("dragover", (e) => handleDragOver(e as DragEvent, index));
        });
    };

    const cleanupDragEvents = () => {
        if (!options.container.value) return;

        const items = options.container.value.querySelectorAll(".draggable-item");
        items.forEach((item) => {
            item.removeEventListener("dragstart", handleDragStart as any);
            item.removeEventListener("dragover", handleDragOver as any);
        });
    };

    onMounted(() => {
        setupDragEvents();
    });

    onBeforeUnmount(() => {
        cleanupDragEvents();
    });
}
