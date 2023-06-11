import React from "react";
import Head from "next/head";

type OpenGraphProps = {
    image: any;
    imageType?: string;
    title: string;
    description: string;
};

export const OpenGraphMeta: React.FC<OpenGraphProps> = ({
    description,
    title,
    image,
    imageType,
}) => {
    return (
        <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:image:type" content={imageType} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </>
    );
};

export const OpenGraphTwitter: React.FC<OpenGraphProps> = ({
    description,
    image,
    title,
    imageType,
}) => {
    return (
        <>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta property="twitter:image:alt" content={title} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:type" content={imageType} />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="630" />
        </>
    );
};

export default function Opengraph({
    description,
    image,
    title,
    imageType = "jpg",
}: OpenGraphProps) {
    return (
        <Head>
            {/* meta header open graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:image:type" content={imageType} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {/* twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta property="twitter:image:alt" content={title} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:type" content={imageType} />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="630" />
            {/*  */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content="React, TypeScript, NextJs, Templalte, Music"
            />
            <meta name="author" content="Bienfait Shomari" />
        </Head>
    );
}
