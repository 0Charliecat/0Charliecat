<script setup>
    import EditorJS    from '@editorjs/editorjs';
    import Header      from '@editorjs/header';
    import SimpleImage from '@editorjs/simple-image';
    import List        from '@editorjs/list';
    import Delimiter   from '@editorjs/delimiter';
    import InlineCode  from '@editorjs/inline-code';
    import LinkTool    from '@editorjs/link'

    const props = defineProps(["editable", "data"]);
    const myself = useNuxtApp()
    console.log(props.data)

    onMounted(() => {
        const editor = new EditorJS({
            holder: 'editor',
            tools: {
                header: Header,
                image: SimpleImage,
                list: List,
                delimiter: Delimiter,
                inlineCode: InlineCode,
                linkTool: LinkTool,
            },

            readOnly: false,

            data: (props.data) ? props.data : {}
        })

        myself.provide("currentEditor", editor)
    })
</script>

<template>
    <div id="editor"></div>
</template>