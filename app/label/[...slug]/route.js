import { NextResponse } from "next/server";
import { ImageResponse } from "next/server";
import { optimize } from "svgo";
import path from "path";
import satori from "satori";
import { promises as fs } from "fs";

export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/svg";

export async function GET(req, { params }) {
    let [label, status, color] = params.slug;

    const dir = path.join(process.cwd());
    const fontBuffer = await fs.readFile(dir + "/app/label/[...slug]/font.ttf");

    const svg = await satori(getLayout(label, status, color), {
        width: 600,
        height: 400,
        fonts: [
            {
                name: "spaceMono",
                data: fontBuffer,
                weight: 400,
                style: "normal",
            },
        ],
    });

    const result = optimize(svg, {
        path: "path-to.svg",
        multipass: true,
    });

    return new Response(result.data, {
        headers: {
            "Content-Type": "image/svg+xml",
        },
    });
}

function getLayout(label, status, color) {
    return {
        type: "div",
        props: {
            style: {
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
                paddingLeft: "16px",
                paddingRight: "16px",
                borderRadius: "4px",
            },
            children: [
                {
                    type: "p",
                    props: {
                        style: {
                            marginRight: "48px",
                        },
                        children: label + ": " + status,
                    },
                },
                {
                    type: "div",
                    props: {
                        style: {
                            width: "20px",
                            height: "20px",
                            borderRadius: "100%",
                            borderWidth: "2px",
                            borderColor: color,
                            marginRight: "4px",
                        },
                    },
                },
                {
                    type: "div",
                    props: {
                        style: {
                            width: "20px",
                            height: "20px",
                            borderRadius: "100%",
                            backgroundColor: color,
                        },
                    },
                },
            ],
        },
    };
}
