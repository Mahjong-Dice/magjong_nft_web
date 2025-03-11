import { useAccount, useWriteContract } from 'wagmi'
import { Button, Flex, Select, Space } from 'antd'
import { useState } from 'react'

// 麻将类型定义
type MahjongType = '筒' | '条' | '万' | '白' | '发' | '中' | '东' | '南' | '西' | '北';

function MahjongNFT() {
    const [selectedType, setSelectedType] = useState<MahjongType[]>(['筒']);
    const [svgContent, setSvgContent] = useState<string>('');

    // 生成随机麻将
    const generateRandomMahjong = () => {
        const type = selectedType[Math.floor(Math.random() * selectedType.length)];
        let value = '';

        if (['筒', '条', '万'].includes(type)) {
            value = String(Math.floor(Math.random() * 9) + 1);
        } else {
            value = type;
        }

        // SVG 麻将牌样式
        const svg = `<svg width="100" height="150" viewBox="0 0 100 150">
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
                <linearGradient id="tileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffffff"/>
                    <stop offset="100%" style="stop-color:#f0f0f0"/>
                </linearGradient>
            </defs>
            <!-- 麻将牌底色 -->
            <rect x="5" y="5" width="90" height="140" rx="10" ry="10" 
                fill="url(#tileGradient)" 
                stroke="#d0d0d0" 
                stroke-width="2"
                filter="url(#shadow)"/>
            <!-- 内边框 -->
            <rect x="12" y="12" width="76" height="126" rx="6" ry="6" 
                fill="none" 
                stroke="#e8e8e8" 
                stroke-width="1"/>
            <!-- 麻将文字 -->
            <text x="50" y="85" 
                text-anchor="middle" 
                font-size="48" 
                font-family="Arial, 微软雅黑" 
                fill="#333333"
                font-weight="bold">${type}${value}</text>
        </svg>`;

        setSvgContent(svg);
    };

    return (
        <Flex vertical gap="middle">
            <Space>
                <Select
                    // mode="multiple"
                    style={{ width: '300px' }}
                    placeholder="选择麻将类型"
                    value={selectedType}
                    onChange={setSelectedType}
                    options={[
                        { value: '筒', label: '筒' },
                        { value: '条', label: '条' },
                        { value: '万', label: '万' },
                        { value: '白', label: '白' },
                        { value: '发', label: '发' },
                        { value: '中', label: '中' },
                        { value: '东', label: '东' },
                        { value: '南', label: '南' },
                        { value: '西', label: '西' },
                        { value: '北', label: '北' },
                    ]}
                />
                <Button type='primary' onClick={generateRandomMahjong}>
                    生成
                </Button>
            </Space>
            {svgContent && (
                <div dangerouslySetInnerHTML={{ __html: svgContent }} />
            )}
        </Flex>
    )
}

export default MahjongNFT;